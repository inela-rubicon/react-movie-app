var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('../webpack.config');
var path = require('path');

var server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
});

server.app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

server.listen(6001, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }
  console.log('Listening at http://localhost:6001/');
});
