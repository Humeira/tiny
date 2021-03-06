var path = require('path')
var express = require('express')
var fs = require('fs')
var bodyParser = require('body-parser')
var webpack = require('webpack')
var config = require('../config')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())


var posts = []

/**
 *
 * Read json file
 */

fs.readFile('./json/posts.json', function(err,data){
  if (!err){
    console.log(data)
    posts = JSON.parse(data)
  }
  else{
    console.log(err)
  }
})

/**
 * CRUD operations
 */

//get
app.get('/api/posts', function(req, res) {
  fs.readFile('./json/posts.json', function(err,data){
    if (!err){
      console.log(data)
      res.send(JSON.parse(data))
    }
    else{
      console.log(err)
    }
  })
})

//get one post

app.get('/api/posts/:id', function(req, res) {
  fs.readFile('./json/posts.json', function(err,data){
    if (!err){
      posts = JSON.parse(data)
      for(var i = 0; i < posts.length; i++){
        if(posts[i].id == req.params.id){
          return res.send(posts[i])
        }
      }
    }
    else{
      console.log(err)
    }
  })
})

//post

app.post('/api/posts', function(req, res){
    res.send('Post added')
    posts.push(req.body)
    var str = JSON.stringify(posts)
    fs.writeFileSync('./json/posts.json', str)
})


var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
