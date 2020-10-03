import React from 'react'
import './Home.css'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from './Header'
import Footer from './Footer'
import {Paper} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: 400,
        margin : 10,
    },
    media: {
      height: 200,
    },
  });
  

function Home() {
    const classes = useStyles();
    return (
        <div>
            <Header name="Home" />
            <div>
                <Paper elevation={2} className="welcome">
                    <div className="kariimg">Top Image</div>
                </Paper>
                <Paper elevation={1} className="news">
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
                    <div className="news-article">
                        <div className="article-date">2020/10/15</div>
                        <div className="article-body">
                            Paken CTFのPracticeを開始しました。
                        </div>
                    </div>
                </Paper>
                <Paper elevation={1} className="contents">
                    <div className="content-title">Contents</div>
                    <div className="content-articles">
                        <Card className={classes.root} onClick={()=>{document.location.href="/Algorithm"}}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                    image="/sample.jpg"
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
                                    image="/3859111_s.jpg"
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
                                    image="/security-4700815_640.jpg"
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
                                    image="/business_karoushi.png"
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
                                    image="/presentation_kaigi_schoolboy.png"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        講演
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        部員の講演の紹介&実況ページです。
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </Paper>
            </div>
            <Footer />
        </div>
    );
}
export default Home;