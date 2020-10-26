import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

interface IGameContentsProps extends RouteComponentProps {
    title: string;
    picture: string;
    downloadUrl: string;
}

interface IGameContentsState {

}

class GameContents extends React.Component<IGameContentsProps, IGameContentsState> {
    constructor(props: IGameContentsProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <Card style={{ margin: "min(50px, 5%)", padding: "20px" }}>
                    <div style={{ float: "left", width: "min(400px, 90%)", padding: "20px" }}>
                        <h2>{this.props.title}</h2>
                        {this.props.children}
                    </div>
                    <div style={{ float: "left", width: "min(400px, 90%)" }}>
                        <img style={{ margin: "60px 10px 10px 10px", width: "100%", height: "200px" }} src={this.props.picture}></img><br />
                        <Button
                            style={{ margin: "10px", width: "100%", color: "white", backgroundColor: "blue" }}
                            onClick={() => { window.location.href = this.props.downloadUrl }}>
                            ダウンロード
                        </Button>
                    </div>
                </Card>
            </div>
        );
    }
}

export default withRouter(GameContents);