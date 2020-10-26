import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import './Home.css'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Paper} from '@material-ui/core';

interface IPaperComponentProps extends RouteComponentProps {

}

interface IPaperComponentState {
    mobile: boolean;
}

class PaperComponent extends React.Component<IPaperComponentProps, IPaperComponentState> {
    constructor(props: IPaperComponentProps) {
        super(props);

        this.state = {
            mobile: window.innerWidth < 1024
        };

        window.addEventListener("resize", _ => {
            this.setState({
                mobile: window.innerWidth < 1024
            })
        });
    }

    paperContents: string[] = [
        "MonopolyをAIで解析する (70th capra314cabra)",
        "先生にやってほしい公平な指名方法 (71st nuhunune)",
        "組み合わせゲーム理論と群論 (71st oliverx3)",
        "DFSとUnionFind (74th cpcznksutbeoa)",
        //"競プロ用語をなるべく分かりやすくまとめてみた (74th Abebenn)",
        "暗号理論入門 (71st kenkenken2004)",
        "01-BFSの問題をBFSで解いてみる (74th Cyanmond)",
        "クエリ問題は一つの世界です。 (70th Thistle)",
        "このchminセグ木に区間和クエリを！ (72nd define)",
        "動的計画法を広めたい (71st penguinman)",
        "ソートアルゴリズムとは？役に立つの？調べてみました！！ (73rd aspi)",
        "フローアルゴリズム入門 (72nd kaage)"
    ];

    getScreenStyle(): React.CSSProperties {
        if (this.state.mobile) {
            return {
                marginTop: "80px",
                paddingBottom: "150px"
            };
        }
        else {
            return {
                marginTop: "80px",
                marginLeft: "300px",
                paddingBottom: "150px"
            };
        }
    }

    getTitleStyle(): React.CSSProperties {
        return {
            margin: "20px",
            padding : "30px"
        };
    }

    getContentStyle(color: string): React.CSSProperties {
        return {
            margin: "0px 20px",
            padding: "20px",
            borderLeft: `6px solid ${color}`
        }
    }

    getButtonStyle(): React.CSSProperties {
        return {
            margin: "5px",
            padding: "20px",
            fontSize: "20px",
            width: "250px",
            color: "white",
            background: "linear-gradient(#8080e0, #a0a0d0)"
        };
    }

    render() {
        let isColorBlue = false;

        return (
            <div>
                <Header name="部誌" />
                <div style={this.getScreenStyle()}>
                    <Card style={this.getTitleStyle()}>
                        今年も、部員がまごころ込めて書いた部誌「電脳2020」を配布します。<br />
                        部員の持っている技能を是非、ご堪能下さい!<br />
                        以下のボタンからダウンロードできます。
                    </Card>

                    <Card style={this.getTitleStyle()}>
                        <div style={{ textAlign: "center" }}>
                            <Button style={this.getButtonStyle()} onClick={() => { window.open("/assets/2020_paken_bushi.pdf", "_blank"); }}>
                                部誌をGET!
                            </Button>
                        </div>
                    </Card>

                    <Card style={this.getTitleStyle()}>
                        <h2>内容</h2>

                        <Grid container spacing={3}>
                            {
                                this.paperContents.map((content, index) => {
                                    isColorBlue = !isColorBlue;
                                    return (
                                        <Grid item xs={12}>
                                            <Card style={this.getContentStyle(isColorBlue ? "#52f22e" : "#2eaff0")}>
                                                {content}
                                            </Card>
                                        </Grid>
                                    );
                                })
                            }
                        </Grid>
                    </Card>
                </div>
                <Footer />
            </div>
        );
    }
}

export default withRouter(PaperComponent);