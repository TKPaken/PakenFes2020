import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import './Home.css'
import Card from '@material-ui/core/Card';
import Header from '../components/Header'
import Footer from '../components/Footer'
import GameContents from '../components/game/GameContents'

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
                    <GameContents
                        title="Blow Shooting (nuhunune)"
                        picture="/assets/img/games/blow-shooting.png"
                        downloadUrl="https://drive.google.com/drive/folders/1cwAsU95wjdlELqJNKq-Z-2Q3cQMl-KcX?usp=sharing">
                        タイトルの通りターゲットに照準を合わせてSHOOTするゲームです。弾を撃つ時、ターゲットにヒットしたときなどに一々効果音をつけることで、爽快感のある仕上がりに出来たと思います。<br />
                        更にオリジナル要素として、Blow、つまり竜巻を撃つことが出来るようにしました(英語にはノーコメントでお願いします)。地形の後ろに隠れているターゲットを浮き上がらせてヒットする時の気持ちよさを、是非体験して頂きたいです！
                    </GameContents>
                    <GameContents
                        title="infinity run (Californium)"
                        picture="/assets/img/games/infinity-run.png"
                        downloadUrl="https://drive.google.com/drive/folders/1UIBk3xu760yAgUO2fMEY_oApZCsLnjkr?usp=sharing">
                        進んでいくとあるコインを取りながら、障害物を避けてできるだけ前に進む、というゲームです。<br />
                        スペースキーでジャンプし、障害物をよけましょう。押されてしまい、画面外に出てしまうとゲームオーバーです。<br />
                        コインは1つで777点加点されます。<br />
                        このゲームにはレベルが存在し、レベルが上がるほど障害物の感覚が狭まります。しかしその分加点されるので、頑張りましょう。
                    </GameContents>
                    <GameContents
                        title="Maze (Forested)"
                        picture="/assets/img/games/maze.png"
                        downloadUrl="https://drive.google.com/drive/folders/1aF4kdyBoh3e_IJ9YdtT-Dsx4FpUpBft-?usp=sharing">
                        これは迷路を探検するゲームにしたかったものです。ゲームと呼べるのかはわかりません。<br />
                        左右キーで方向転換ができます。スペースキーで前に進むことができます。<br />
                        ところどころに黄色い床があると思います。これを踏むと、赤い壁が消え、代わりに青い壁が出現します。もう一度踏むと元に戻ります。緑の床を探し、踏むことができたらクリアです。<br />
                        壁に近づくと向こう側が見えてしまいます。仕様です。
                    </GameContents>
                    <GameContents
                        title="ピコピコハンマー (penguinman)"
                        picture="/assets/img/games/pikohammer.png"
                        downloadUrl="https://drive.google.com/drive/folders/1S42owKPqEzkEJr3VgcXwLkSPkI6qAqcc?usp=sharing">
                        ピコピコハンマーから逃げるゲームです。<br />
                        ルールや操作方法はプログラム内に書いてあるので、そちらを見てください。<br />
                        一応裏実装として z ボタンを押すと何かが起きます。飽きてきたら押してみてください。
                    </GameContents>
                    <GameContents
                        title="Doppelganger (Thistle)"
                        picture="/assets/img/games/doppel.PNG"
                        downloadUrl="https://drive.google.com/drive/folders/1MjeGCI1vlhui63CJJ27cXs0vEdSV70C0?usp=sharing">
                        世界に彷徨うドッペルゲンガーに見つからないよう逃げるゲームです。<br />
                        ゴール地点の黄金の良く分からない像に触れることで脱出できます。<br />
                        身体を一切動かさずに移動し、たまにフィギュアスケーターのように回転するドッペルゲンガーの恐怖からあなたは逃げ切れるか？？
                    </GameContents>
                    <GameContents
                        title="ブロック崩し (cpcznksutbeoa)"
                        picture="/assets/img/games/block.jpg"
                        downloadUrl="https://drive.google.com/drive/folders/1XjXkWC5dksO2-tNCixmtj4b8xIl6dLDv?usp=sharing"
                    >
                        このアプリは、パドルでボールを跳ね返してブロックを壊す、ブロック崩しです。<br />
                        パソコンのマウス等によって動く、矢印の横方向の位置にパドルの中心がきます。ボールを跳ね返して、できるだけ多くのブロックを壊しましょう！<br />
                        全てのブロックを壊すと、ボールの速度が少し速くなってより高いレベルをプレイできます。
                        画面に写っている場所より下にボールが行ってしまうと、ゲームオーバーになります。
                    </GameContents>
                    <GameContents
                        title="Convex Hull Visualizer (Ebishu)"
                        picture="/assets/img/games/convex.JPG"
                        downloadUrl="https://drive.google.com/drive/folders/1ovq0KcJvWVb287ECLxu0yoxQbBcHNl81?usp=sharing">
                        凸包を計算するアルゴリズムの一つである「andrew's monotone chain algorithm」のビジュアライザです。<br />
                        andrew's monotone chain algorithmとは
                        点の数をnとすると、凸包をO(n log n)で求めることができるアルゴリズムです。<br />
                        点をx座標でソートした後、上側の凸包を下側の凸包を別々に計算し、併合して凸包を求めます。
                    </GameContents>
                    <GameContents
                        title="TK_FPS (primenumberzz)"
                        picture="/assets/img/games/fps.png"
                        downloadUrl="https://drive.google.com/drive/folders/1luyv-6TIlNRPoV54zh_9K6aZwSiC-iUo?usp=sharing">
                        Unity公式のFPS Microgame Templateを利用し、チュートリアルを見ながら作りました。<br />
                        FPS Microgame Templateを使うとプログラミングの知識やコーディングも必要なく、
                        初心者の僕でもUnityの使い方を学ぶことができました。<br />
                        また、作りながら、terrainを使った地形の制作などを学びました。
                        Unityでのゲーム制作の入門としておすすめです。<br />
                        〆切を認識しておらず、細かい作り込みができなかったことが反省点です。
                    </GameContents>
                    <GameContents
                        title="CrammingGame2.1.1 (Thistle)"
                        picture="/assets/img/games/cramming.PNG"
                        downloadUrl="https://drive.google.com/drive/folders/1Q6ySLBOoRbi4OqewHy9Lz093puJn5JQI?usp=sharing">
                        期末対策用に作ったアプリケーションです。<br />
                        簡単に説明すると「デジタル無限単語帳 With 問題セット機能付き」です。<br />
                        自分で作った問題集から無限に問題を出してくれます。<br />
                        自分で使うように作ったのでかなり高機能です。
                    </GameContents>
                    <GameContents
                        title="fps game (sandyoji)"
                        picture="/assets/img/games/fps-game.PNG"
                        downloadUrl="https://drive.google.com/drive/folders/1r65BvJb-1FyEHJEnUmX1gfvGwp0SMrGa?usp=sharing">
                        これはユニティ公式が作成したfpsのチュートリアルでできるゲームを少し改造したものです。
                    </GameContents>
                </div>
                <Footer />
            </div>
        );
    }
}

export default withRouter(GameComponent);