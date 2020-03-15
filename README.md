# Gulp仕様書
コマンドプロンプト（ターミナル）を起動しておくこと。

※コマンドは使用しているパッケージマネージャーによって異なります。（npm、yarn等）  
※vs codeのターミナルで使用すると楽だと思います。  
※もしくはAtomのプラグイン。（「gulp-control」を導入）

## 自動化処理
「default」のタスク名は、「npm run gulp」と入力するだけでOK。  
※自動で「browser-sync,pug,sass,画像圧縮」が起動し、監視し続けます。  
制作前に設定ファイル（configファイル）を調整の上、上記コマンドを使用してください。

## 各種タスクについて

### 画像関連
#### 画像の圧縮
「npm run gulp img_min」  
→「config.js」で指定したパスから指定したフォルダへ圧縮。

#### 画像のリサイズ
未実装  
※他のツールをインストールしなければいけないため。

### CSS関連
#### CSSの圧縮
「npm run gulp css_min」  
→「config.js」で指定したパスから「dist」フォルダへ圧縮。

#### CSSの整形
「npm run gulp css_comb」  
→「config.js」で指定したパスから「dist」フォルダへ整形。  
→整形方法は「.csscomb.json」内で設定を行う。

#### sassのコンパイル
「npm run gulp sass」  
→「config.js」で指定したパスから指定したフォルダへコンパイル。

※「Atom」の自動コンパイルと干渉しているので注意。  
　使用する際はAtomの自動コンパイルの設定をオフへ。

### JavaScript関連
#### JavaScriptの圧縮
「npm run gulp js_min」  
→「config.js」で指定したパスから「dist」フォルダへ圧縮。

### その他
#### browser-sync
「npm run gulp bro」  
→「config.js」で指定したフォルダ内を常に監視してくれる。