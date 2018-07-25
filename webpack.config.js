const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill','./src/js/index.js'], // 시작점
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  }, // 저장 경로
  // mode: 'development', 
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}

/*
  // const path = require('path'); => 기본 NodeJS에서 제공하는 모듈

  // entry : 시작점
  => bundling 하고자 하는 파일의 경로 설정
  => entry point를 다중으로 가지게 될 때, array로 묶어준다.

  // output : bundling 저장 경로
  => bundling 하고자 하는 파일이 bundling 하여 어디에 파일을 만들지 설정
  => path.resolve(__dirname, 'dist/js') => __dirname : Parent Root, dist/js => 하위 경로
  => filename => bundling 하여 만들어질 파일 이름 설정

  // mode
  => pakage.json 에서 설정할 수 있다.
  mode: development => beautify
  mode: production => uglify

  // module
  => rules의 속성으로 사용하고자 하는 모든 loader를 `배열`로 받는다.
  => 또, rules 안의 사용하고자 하는 module은 객체로 이루어진다.
  => test, 각 loader에는 test property가 필요하다. RegExp(정규표현식)을 사용하여 무슨 파일을 읽어들일지 설정한다. ex) /\.js$/
  => use property를 통해 사용할 loader를 정의한다.
  => exclude property를 통해 /node_modules/ 의 모든 파일을 제외 설정을 한다.
*/
