import React from 'react'
import './Home.css'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Paper} from '@material-ui/core';

function Home() {
    return (
        <div>
            <Header name="Home" />
            <div className="home-content">
                <div className="welcome">
                    <img alt="header" src="/assets/img/header.jpg" className="headerimage"/>
                </div>
                <div className="contents">
                    <div className="content-articles">
                        <Card className="root" onClick={()=>{document.location.href="https://pakenctf.tk"}}>
                            <CardActionArea>
                                <CardMedia
                                className="media"
                                    image="/assets/img/security-4700815_640.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Paken CTF
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        班員独自のCapture The Flag、Paken CTF #1を開催しています。
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className="root" onClick={()=>{document.location.href="/game"}}>
                            <CardActionArea>
                                <CardMedia
                                className="media"
                                    image="/assets/img/sample.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        ゲーム
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        班員の作成したゲームを配布しているページです。
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className="root" onClick={()=>{document.location.href="/CG"}}>
                            <CardActionArea>
                                <CardMedia
                                className="media"
                                    image="/assets/img/3859111_s.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        CG
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        班員の作成したCG作品集です。
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className="root" onClick={()=>{document.location.href="/lecture"}}>
                            <CardActionArea>
                                <CardMedia
                                className="media"
                                    image="/assets/img/presentation_kaigi_schoolboy.png"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        講演
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        部員の講演の紹介&amp;実況ページです。
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className="root" onClick={()=>{document.location.href="/paper"}}>
                            <CardActionArea>
                                <CardMedia
                                className="media"
                                    image="/assets/img/business_karoushi.png"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        部誌
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        部員の技能を集めた「電脳2020」を配布しています。
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                    <Paper elevation={1} className="content-paper">
                    <div className="content-title">News</div>
                    <div className="news-article">
                        <div className="article-date">2020/10/03</div>
                        <div className="article-body">
                            サイトのプロトタイプを作成しました。
                        </div>
                    </div>
                    <div className="news-article">
                        <div className="article-date">2020/10/05</div>
                        <div className="article-body">
                            デコのロゴを作成しました。
                        </div>
                    </div>
                </Paper>
                <Paper elevation={1} className="content-paper">
                    <div className="content-title">Schedule</div>
                    <div className="news-article">
                        <div className="article-date">2020/10/20</div>
                        <div className="article-body">
                            Paken CTF #1 Practiceを開始予定
                        </div>
                    </div>
                </Paper>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Home;