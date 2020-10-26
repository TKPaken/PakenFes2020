import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import './Home.css'
import Card from '@material-ui/core/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CGContents from '../components/CG/CGContents';

interface ICGComponentProps extends RouteComponentProps {

}

interface ICGComponentState {
    mobile: boolean;
}

class CGComponent extends React.Component<ICGComponentProps, ICGComponentState> {
    constructor(props: ICGComponentProps) {
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
                <Header name="CG" />
                <div style={this.getScreenStyle()}>
                    <Card style={{ margin: "min(50px, 5%)", padding: "40px" }}>
                        <h2>はじめに</h2>
                        CG(コンピューター・グラフィックス)とは、コンピューターを使って描かれたもののことです。
                        もちろんあなたが見ているパソコン(スマホ)の画面はすべてCGで作られています。<br />
                        と言うとかなりCGのイメージと離れてしまいますね。この班で行っているCGは、もっと狭いものです。
                        3Dの物体をコンピューター内で作って配置したり、表面の質感を設定したり、物体を動かしたり・・・ 一般的なCGっぽいことをやっています。<br />
                        今回は短い準備期間でしたが、CG用のソフト「blender」を用いて、5つの画像作品を作りました。是非お楽しみ下さい。
                    </Card>
                    <CGContents
                        title="或る街角の夜 (nuhunune)"
                        picture="/assets/img/CG/nuhunune.png">
                        暗い街でぽつんと明るく光っている自動販売機をイメージして作りました。この作品で使った3Dモデルは、すべて自作したものです。<br />
                        ゴミ箱のモデリングはそこそこリアルに出来たと思いますし、床部分はテクスチャの輝度を落とすことでまあまあいい感じに見えるようにできましたが、ライティング(光を当てる)技術に難ありですね。これから精進していきたいです。<br />
                        ところで、この作品の中央付近にある缶のモデルは、ネイティブアプリ班で展示している「Blow Shooting」というゲームでも使用したものです。
                        そちらのゲームも自信作なので、ネイティブアプリ班にも是非遊びに来て下さい。
                    </CGContents>
                    <CGContents
                        title="くノ一のような人 (Thistle)"
                        picture="/assets/img/CG/Thistle.png">
                        もともとはUnityちゃんのようなキャラクターになる予定でした。<br />
                        ただ、人間の目は思っているより小さく、キャラクターの目は思っているより大きかったらしいです。<br />
                        この勘違いの結果はご覧になっている通りです。<br />
                        HumanoidのRigを使用しているため、自由にポーズを変更することができます。<br />
                        この画像のモデルは、ネイティブアプリ班のゲーム"Doppelgänger"に使用されていて、<br />
                        そちらでは実際に動いているモデルを見ることができます。<br />
                        Unityへの移植の都合により、そちらではホラーテイストのモデルになっています。
                    </CGContents>
                    <CGContents
                        title="トイレ (AndrewK)"
                        picture="/assets/img/CG/AndrewK.png">
                        お洒落な感じのトイレをイメージして作りました。<br />
                        壁のテクスチャやライティングは割とうまく行ったのではないかと思いましたが、洗面器のしたの木の棚のテクスチャやトイレのテクスチャはのっぺりとした印象を受けるものになってしまったのでこれから頑張って改善していきたいです。
                        奥の花もよくみると形が結構雑だったりするのでモデリング技術もこれから習得していきたいです。
                    </CGContents>
                    <CGContents
                        title="実験器具ブラザーズ (kenkenken2004)"
                        picture="/assets/img/CG/ken2004.png">
                        僕は科学部にも所属しているので実験器具を作ってみました。<br />
                        <br />
                        三角フラスコ：<br />
                        ドイツ生まれのガラス器具。底が平らだからしっかりと自分で立つことができる。<br />
                        口が細いため中身が蒸発しても気体が漏れることを抑えられる。<br />
                        <br />
                        丸底フラスコ：<br />
                        分厚く、反応の衝撃にしっかりと耐えられる。<br />
                        だが、底が丸いから自力で立つことができないという残念な仕様。<br />
                        <br />
                        グリフィンビーカー：<br />
                        鷲の上半身と獅子の下半身を持つ怪物の名を冠するビーカー。<br />
                        由来はおそらく注ぎ口がくちばしに似ているから。<br />
                        <br />
                        コニカルビーカー：<br />
                        グリフィンと違い、口が細くなっていて振りやすい。<br />
                        洗うのが若干面倒。<br />
                        <br />
                        シャーレ：<br />
                        微生物の培養で使われたのが始まり。<br />
                        今ではあらゆる一時保存に使われる便利屋。<br />
                        <br />
                        試験管：<br />
                        反応を観察するための器具。<br />
                        もしかしたら一番有名かもしれない。<br />
                        落とせない汚れが着いたらもう使えないのでごみ箱に直行。<br />
                        <br />
                        ガラス棒：<br />
                        かき混ぜるだけでなく、バーナーでいろいろ曲げるなどして自由自在に変身する。
                    </CGContents>
                    <CGContents
                        title="部屋 (wcwt57)"
                        picture="/assets/img/CG/wcwt57.png">
                        74期(中1)のwcwt57です。このCG画像は僕が初めて自力で作った作品です。<br />
                        今回の作品で力を注いだところはモデリングという形をとる作業です。<br />
                        今回は初めての試みとしてスカルプトモードというものを使ってみました。スカルプトモードを使うと粘土のようにものの形を変える事ができます。ソファーのしわを再現するために使いました。<br />
                        カーテンも物理演算なるものを使って頑張ったので見てください。<br />
                        では、筑駒の文化祭を楽しんでください。
                    </CGContents>
                    <Card style={{ margin: "min(50px, 5%)", padding: "40px" }}>
                        <h2>おわりに</h2>
                        今回ご覧頂いた画像はカメラで撮ったものではなく、すべてコンピューターで作ったものです。
                        凝視してもわからないほどではないにしろ、そのリアルさには驚いたのではないでしょうか。これがCGのパワーです。<br />
                        今後も我がCGチームは技術を磨いていきます。また展示を見ていただく機会があれば、楽しみにしていて下さい。
                    </Card>
                </div>
                <Footer />
            </div>
        );
    }
}

export default withRouter(CGComponent);