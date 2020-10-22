import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import './Home.css'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
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

    getScreenStyle(): React.CSSProperties {
        if (this.state.mobile) {
            return {
                marginTop: "80px"
            };
        }
        else {
            return {
                marginTop: "80px",
                marginLeft: "300px"
            };
        }
    }

    getTitleStyle(): React.CSSProperties {
        return {
            margin: "20px",
            padding : "30px"
        };
    }

    getButtonStyle(): React.CSSProperties {
        return {
            margin: "5px",
            padding: "20px",
            fontSize: "20px",
            width: "230px",
            color: "white",
            background: "linear-gradient(#8080e0, #a0a0d0)"
        };
    }

    render() {
        return (
            <div>
                <Header name="部誌" />
                <div style={this.getScreenStyle()}>
                    <Card style={this.getTitleStyle()}>
                        部誌を配布しているページです
                    </Card>

                    <Card style={this.getTitleStyle()}>
                        <div style={{ textAlign: "center" }}>
                            <Button style={this.getButtonStyle()} onClick={() => { window.open("", "_blank"); }}>
                                部誌をGET
                            </Button>
                        </div>
                    </Card>
                </div>
                <Footer />
            </div>
        );
    }
}

export default withRouter(PaperComponent);