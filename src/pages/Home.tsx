import React from 'react'
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

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: 'calc((100vw - 350px) * 0.3)',
        margin: '15px 15px',
        height: 'auto',
        ['@media (max-width:1024px)']: {
            width: '40vw',
            margin: '10px 10px',
        },
        ['@media (max-width:550px)']: {
            width: '90vw',
            margin: '10px 0px',
        }
    },
    media: {
        height: '20vw',
        minHeight: 150,
        maxHeight: 300,
    },
});

function Home() {
    const classes = useStyles();
    return (
        <div>
            <Header name="Home" />
            <div className="home-content">
                <div className="welcome">
                    <img src="/assets/img/header.jpg" className="headerimage"/>
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
                <div className="contents">
                    <div className="content-articles">
                        <Card className={classes.root} onClick={()=>{document.location.href="/Algorithm"}}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                    image="/assets/img/sample.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        アルゴリズム班
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        班員の作成した「アルゴリズムパズル」を集めました。
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className={classes.root} onClick={()=>{document.location.href="/CG"}}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                    image="/assets/img/3859111_s.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        CG班
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        班員の作成したCG作品集です。CGソフトの使い方も載っています。
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className={classes.root} onClick={()=>{document.location.href="/Security"}}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                    image="/assets/img/security-4700815_640.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        セキュリティ班
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        班員独自のCapture The Flag、Paken CTF #1を開催しています。
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className={classes.root} onClick={()=>{document.location.href="/Paper"}}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
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
                        <Card className={classes.root} onClick={()=>{document.location.href="/Lecture"}}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
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
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Home;