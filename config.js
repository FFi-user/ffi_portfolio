/**
 * パスの設定
 *
 * @author sho ishijima
 */

module.exports = {
  start: {
    path: 'index.html' // browserSyncの開始URLを設定
  },
  source: {
    srcDir: 'src', // 開発ルート
    dstDir: 'htdocs', // プロジェクトルート
    targetDir: '',
    targetPage: ''
  },
  imgSource: {
    srcDir : 'src', //圧縮前の画像ディレクトリ
    dstDir : 'htdocs' //圧縮後の画像ディレクトリ
  }
};