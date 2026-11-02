export const pageTemplates = {
    home: `<nav class="sidebar">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/product.html">Product</a></li>
            <li><a href="/clothes.html">Clothes</a></li>
            <li><a href="/about.html">About</a></li>
        </ul>
    </nav>
    <div class="main-content">
        <div class="home-container">
            <p class="portfolio-title">KabutoEbi's Portfolio</p>

            <p class="description">作品とか色々載せていきます</p>

            <div class="product-link-section">
                <h2>作品を見る</h2>
                <p>Web、アプリ、ゲーム、電子工作。ジャンルをまたいで作ったものを紹介しています。</p>
                <a href="/product.html" class="product-link-button">Product →</a>
            </div>

            <div class="contact-section">
                <h2>Contact</h2>
                <p class="contact-info select-none">kabutoebi1729@gmail.com</p>
            </div>

            <div class="links-section">
                <h2>Links</h2>
                <ul class="contact">
                    <li><a href="https://github.com/KabutoEbi" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://qiita.com/KabutoEbi" target="_blank" rel="noopener noreferrer">Qiita</a></li>
                    <li><a class="reverse-arrow" href="https://suzuri.jp/KabutoEbi" target="_blank" rel="noopener noreferrer">SUZURI</a></li>
                    <li><a href="https://x.com/KabutoEbi_mp3" target="_blank" rel="noopener noreferrer">X</a></li>
                </ul>
            </div>
        </div>
        <footer class="footer">
            <p>&copy; 2026 KabutoEbi. All rights reserved.</p>
        </footer>
    </div>`,
    product: `<nav class="sidebar">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/product.html">Product</a></li>
            <li><a href="/clothes.html">Clothes</a></li>
            <li><a href="/about.html">About</a></li>
        </ul>
    </nav>
    <div class="main-content">
        <div class="product-container" id="product-container" aria-live="polite">
            <p class="product-load-message">作品を読み込んでいます...</p>
            <noscript>
                <p class="product-load-error">作品一覧を表示するにはJavaScriptを有効にしてください。</p>
            </noscript>
        </div>
        <p class="excuse">私は多数の素晴らしい作品を製作したが，ここに記すには余白が小さすぎる．</p>
        <footer class="footer">
            <p>&copy; 2026 KabutoEbi. All rights reserved.</p>
        </footer>
    </div>`,
    clothes: `<nav class="sidebar">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/product.html">Product</a></li>
            <li><a href="/clothes.html">Clothes</a></li>
            <li><a href="/about.html">About</a></li>
        </ul>
    </nav>
    <div class="main-content">
        <div class="clothes">
            <p><a href="https://suzuri.jp/KabutoEbi" target="_blank" rel="noopener noreferrer">SUZURIページ</a></p>
            <!-- int -->
            <iframe height="162" width="375" src="https://suzuri.jp/KabutoEbi/20253981/t-shirt/s/white/embed"></iframe>
            <!-- The ZEN -->
            <iframe height="162" width="375" src="https://suzuri.jp/KabutoEbi/18653084/t-shirt/s/white/embed"></iframe>
            <iframe height="162" width="375" src="https://suzuri.jp/KabutoEbi/18653084/hoodie/s/white/embed"></iframe>
            <!-- 鰤ティッシュ -->
            <iframe height="162" width="375" src="https://suzuri.jp/KabutoEbi/18652970/t-shirt/s/white/embed"></iframe>
            <iframe height="162" width="375" src="https://suzuri.jp/KabutoEbi/18652970/hoodie/s/white/embed"></iframe>
            <!-- 天動説グラフ -->
            <iframe height="162" width="375" src="https://suzuri.jp/KabutoEbi/18324437/t-shirt/s/white/embed"></iframe>
        </div>
        <footer class="footer">
            <p>&copy; 2026 KabutoEbi. All rights reserved.</p>
        </footer>
    </div>`,
    about: `<nav class="sidebar">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/product.html">Product</a></li>
            <li><a href="/clothes.html">Clothes</a></li>
            <li><a href="/about.html">About</a></li>
        </ul>
    </nav>
    <div class="main-content">
        <div class="profile">
            <div class="introduction">
                    <h2>KabutoEbi</h2>
                    <img class="icon" src="images/icon.png" alt="KabutoEbi Icon">
                    <p>高専4年生</p>
                    <p>電気情報工学科(電気分野は苦手)</p>
                    <p>趣味: ロードバイク / 一人旅</p>
                    <p>主にC++で競技プログラミングをしています</p>
                    <p>時々、電子工作・ゲーム制作・アプリ開発・Web開発をします</p>
                </div>
                <div class="tech-stack">
                    <h2>技術スタック</h2>
                    <table>
                        <tr>
                            <td>C++</td>
                            <td>そこそこ</td>
                        </tr>
                        <tr>
                            <td>Unity</td>
                            <td>ある程度</td>
                        </tr>
                        <tr>
                            <td>React</td>
                            <td>ある程度</td>
                        </tr>
                        <tr>
                            <td>Flutter</td>
                            <td>ある程度</td>
                        </tr>
                        <tr>
                            <td>Git</td>
                            <td>基本的な操作</td>
                        </tr>
                        <tr>
                            <td>AtCoder</td>
                            <td>茶</td>
                        </tr>
                        <tr>
                            <td>Japanese</td>
                            <td>ぎりぎり</td>
                        </tr>
                    </table>
                </div>
                <div class="bike-section">
                    <h2>ロードバイク</h2>
                    <img class="roadbike" src="images/roadbike.png" alt="roadbike">
                    <h3>スペック</h3>
                    <table>
                        <tr>
                            <td>メーカー</td>
                            <td>LOUIS GARNEAU</td>
                        </tr>
                        <tr>
                            <td>モデル</td>
                            <td>AXIS</td>
                        </tr>
                        <tr>
                            <td>年式</td>
                            <td>2016年</td>
                        </tr>
                        <tr>
                            <td>変速段数</td>
                            <td>2×8</td>
                        </tr>
                        <tr>
                            <td>重量</td>
                            <td>約9.4kg</td>
                        </tr>
                        <tr>
                            <td>タイヤサイズ</td>
                            <td>700×25c</td>
                        </tr>
                    </table>
                    <h3>ライディングデータ</h3>
                    <table>
                        <tr>
                            <td>総走行距離</td>
                            <td>約610km</td>
                        </tr>
                        <tr>
                            <td>最長距離</td>
                            <td>110km</td>
                        </tr>
                        <tr>
                            <td>平均速度</td>
                            <td>28km/h</td>
                        </tr>
                    </table>
                    <p class="tweet">そろそろ新しいの欲しい</p>
                </div>
                <div class="travel-section">
                    <h2>一人旅</h2>
                    <p>これまでに訪れた都道府県</p>
                    <p>北海道 / 神奈川 / 東京 / 石川 / 滋賀 / 兵庫 / 京都 / 大阪 / 奈良</p>
                </div>
            </div>
        <footer class="footer">
            <p>&copy; 2026 KabutoEbi. All rights reserved.</p>
        </footer>
    </div>`,
    veryfunny: `<nav class="sidebar">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/product.html">Product</a></li>
            <li><a href="/clothes.html">Clothes</a></li>
            <li><a href="/about.html">About</a></li>
        </ul>
    </nav>
    <div class="main-content">
        <div class="veryfunny-container">
            <h2 class="veryfunny-title">veryfunny</h2>
            <p class="veryfunny-subtitle">とてもおもしろい</p>
            <ul class="veryfunny-list">
                <li>白鳥「まあ、そこにスワンなよ」</li>
                <li>うとうとしてる 打とうとしてる</li>
                <li>徳島で得しました</li>
                <li>相手はいたが，空いてはいた</li>
                <li>You Know 有能</li>
                <li>不甲斐なくてタフガイ泣くって</li>
                <li>一命取る1m</li>
                <li>俳句ハイクオリティ</li>
                <li>嫌だ！楽した！堕落した！</li>
                <li>オウムガイ一応無害</li>
                <li>IとYou 愛と言う</li>
                <li>払いたいけど腹痛い</li>
                <li>麻痺る真昼</li>
                <li>問題は異臭(issue)です</li>
                <li>食事を見ーる</li>
                <li>めぼしい梅干し</li>
                <li>墓ない儚い人生</li>
                <li>退屈した靴下</li>
                <li>入れ歯をしていれば、、、</li>
                <li>ロードバイクで一浪ドバイ行く</li>
                <li>違和感小さ い分かん ない</li>
                <li>クーロンの空論</li>
                <li>秦の始皇帝による会心の思考停止</li>
                <li>日曜日はずさんでいい</li>
                <li>参政権 得るまでたく さん正拳 突き</li>
                <li>仮想化した世界を貸そうか？</li>
                <li>為替 次第で 買わせ ていただきます</li>
                <li>のび太ママ、伸びたまま</li>
                <li>入れ歯の仕入れ場</li>
                <li>ジョージア、常時明るい</li>
                <li>日本刀に本当のことを言う</li>
                <li>中国、尖閣諸島　中国船隠し与党</li>
                <li>寝起きの取締役 in 沖ノ鳥島</li>
                <li>ニュートンの軍事介入頓挫</li>
                <li>異端者が乗るダサい単車</li>
                <li>ケトルを受け取る</li>
                <li>隠し事は書く仕事</li>
                <li>鷹になりたい生きたカニ</li>
                <li>穴子3万匹、アナゴさん万引き</li>
                <li>新聞吸う真分数</li>
                <li>裏地見るプーチン</li>
                <li>汚い店行きたない</li>
                <li>正月来た！生姜尽きた...</li>
                <li>おお味噌か</li>
                <li>内陸にある綺麗な入り組み</li>
                <li>天動説、地球の自転どう説明する？</li>
                <li>ヒトラーを慕う人ら</li>
                <li>穴を掘ーる</li>
                <li>寒波に怯えるカンパニー</li>
                <li>道徳、どう解く？</li>
                <li>怠惰な生活を送るなんて失態だ</li>
                <li>石鹸が世間を席巻する</li>
                <li>水に難溶なんよー</li>
                <li>ナウシカを見失う鹿</li>
                <li>名刺の名シーン</li>
                <li>理想はすぐ変わりそう</li>
                <li>Qiitaで聞いたら？</li>
                <li>くるぶしをひったくる武士</li>
                <li>駆け出しのカケダシ</li>
                <li>実は、実話なんです</li>
                <li>ハッスルして声を発する</li>
                <li>乱視なんかいらんし</li>
                <li>水性の彗星</li>
                <li>Whaleが吠えーる</li>
            </ul>
        </div>
        <footer class="footer">
            <p>&copy; 2026 KabutoEbi. All rights reserved.</p>
        </footer>
    </div>`,
    stackstones: `<nav class="sidebar">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/product.html">Product</a></li>
            <li><a href="/clothes.html">Clothes</a></li>
            <li><a href="/about.html">About</a></li>
        </ul>
    </nav>
    <div class="main-content">
        <div class="stackstones-container">
            <h2 class="stackstones-title">賽の河原の石積み</h2>
            <p class="stackstones-note">※パソコンでのプレイを推奨します※</p>
            <iframe class="stackstones-iframe" src="./unity/index.html" width="960" height="650" frameborder="0" allowfullscreen>
            </iframe>
        </div>
        <footer class="footer">
            <p>&copy; 2026 KabutoEbi. All rights reserved.</p>
        </footer>
    </div>`,
    admin: `<main class="admin-page">
        <div id="admin-heading" class="hidden">
            <header class="admin-header">
                <div>
                    <h1>商品管理</h1>
                    <p>Firebaseに商品情報を保存します。</p>
                    <p id="admin-user"></p>
                </div>
                <a href="product.html" class="admin-preview-link" target="_blank" rel="noopener noreferrer">商品ページを確認</a>
            </header>
        </div>
        <section id="admin-login" class="admin-notice">
            <h2>管理者ログイン</h2>
            <button type="button" id="admin-google-login">Googleでログイン</button>
        </section>
        <p id="admin-status" class="admin-status" aria-live="polite">ログイン状態を確認しています...</p>
        <section id="admin-editor" class="hidden">
            <div class="admin-toolbar" aria-label="商品管理操作">
                <button type="button" id="admin-add">商品を追加</button>
                <button type="button" id="admin-logout">ログアウト</button>
            </div>
            <div id="admin-table-container" class="admin-table-container"></div>
        </section>
    </main>`,
    notFound: `<nav class="sidebar">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/product.html">Product</a></li>
            <li><a href="/clothes.html">Clothes</a></li>
            <li><a href="/about.html">About</a></li>
        </ul>
    </nav>
    <div class="main-content">
        <div class="error-container">
            <div class="error-box">
                <h2 class="error-title">404</h2>
                <p class="error-message">ページが見つかりません</p>
                <p class="error-description">
                    お探しのページは存在しないか、移動または削除された可能性があります。
                </p>
                <img src="images/icon.png" alt="icon" class="icon-image" id="iconImage">
                <p class="click-text">↑クリック↑</p>
                <a href="/" class="home-button">ホームに戻る</a>
            </div>
        </div>
        <div id="heartsContainer"></div>
        <footer class="footer">
            <p>&copy; 2026 KabutoEbi. All rights reserved.</p>
        </footer>
    </div>`
} as const;

export type PageName = keyof typeof pageTemplates;
