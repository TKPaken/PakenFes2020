import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import './Home.css'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import NotFound from './NotFound';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { gameData, GameInfo } from '../data/gameData';

interface IGameDetailsComponentProps extends RouteComponentProps<{ id: string }> {

}

interface IGameDetailsComponentState {
    mobile: boolean;
    info: GameInfo | undefined;
}

class GameDetailsComponent extends React.Component<IGameDetailsComponentProps, IGameDetailsComponentState> {
    constructor(props: IGameDetailsComponentProps) {
        super(props);

        const info = gameData.find((info) => this.props.match.params.id === info.id);

        this.state = {
            mobile: window.innerWidth < 1024,
            info: info
        };

        window.addEventListener("resize", _ => {
            this.setState({
                mobile: window.innerWidth < 1024
            })
        });
    }

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

    render() {
        if (!this.state.info) {
            return (
                <NotFound />
            );
        }

        return (
            <div>
                <Header name="ゲーム" />
                <div style={this.getScreenStyle()}>
                <Card style={{ margin: "min(50px, 5%)", padding: "20px" }}>
                    <div style={{ width: "min(400px, 90%)" }}>
                        <h2>{this.state.info.title}</h2>
                        <img alt={this.state.info.title} style={{ margin: "10px", width: "100%", height: "200px" }} src={this.state.info.picture}></img><br />
                        <Button
                            style={{ margin: "10px", width: "100%", color: "white", backgroundColor: "blue" }}
                            onClick={() => { window.location.href = this.state.info?.downloadUrl ?? "" }}>
                            ダウンロード
                        </Button>
                        <h3>説明</h3>
                        {this.state.info.description}
                        <h3>他の部員からの感想</h3>
                        {this.state.info.review}
                    </div>
                </Card>
                </div>
                <Footer />
            </div>
        );
    }
}

export default withRouter(GameDetailsComponent);