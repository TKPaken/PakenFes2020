import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import './Home.css'
import Card from '@material-ui/core/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GameContents from '../components/game/GameContents';
import { gameData } from '../data/gameData';

interface IGameComponentProps extends RouteComponentProps {

}

interface IGameComponentState {
    mobile: boolean;
}

class GameComponent extends React.Component<IGameComponentProps, IGameComponentState> {
    constructor(props: IGameComponentProps) {
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
        return (
            <div>
                <Header name="ゲーム" />
                <div style={this.getScreenStyle()}>
                    <Card style={{ margin: "min(50px, 5%)", padding: "20px", textAlign: "center" }}>
                        <h2>ゲーム配布ページ</h2>
                    </Card>
                    {
                        gameData.map((info) => {
                            return (
                                <GameContents info={info}>
                                    {info.description}
                                </GameContents>
                            )
                        })
                    }
                </div>
                <Footer />
            </div>
        );
    }
}

export default withRouter(GameComponent);