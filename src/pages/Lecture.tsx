import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import './Home.css'
import Card from '@material-ui/core/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface ILectureComponentProps extends RouteComponentProps {

}

interface ILectureComponentState {
    mobile: boolean;
}

class LectureComponent extends React.Component<ILectureComponentProps, ILectureComponentState> {
    constructor(props: ILectureComponentProps) {
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
        return (
            <div>
                <Header name="講演" />
                <div style={this.getScreenStyle()}>
                    <Card style={this.getTitleStyle()}>
                        <h2>量子コンピュータ入門</h2>
                    </Card>

                    <Card style={this.getTitleStyle()}>
                        <div style={{ textAlign: "center" }}>
                            {
                                this.state.mobile
                                ? <iframe title="quantum computer" src="https://drive.google.com/file/d/1DqqETQkMlQhcFQufh6V9Sd6cb3UGK3zI/preview" width="100%" height="200px"></iframe>
                                : <iframe title="quantum computer mobile" src="https://drive.google.com/file/d/1DqqETQkMlQhcFQufh6V9Sd6cb3UGK3zI/preview" width="800px" height="400px"></iframe>
                            }
                        </div>
                    </Card>
                </div>
                <Footer />
            </div>
        );
    }
}

export default withRouter(LectureComponent);