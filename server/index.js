const path = require('path')
const express = require('express')
const app = express()
const route = require('./route')

console.log(__dirname)

// allow cross-origin
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// static serving
var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
      res.set('x-timestamp', Date.now())
    }
  }
  app.use(express.static('../client/dist', options))

const config = {
    staticDataPath: path.resolve(__dirname, 'data', 'items.json')
}

route.videos(app, config)

app.listen(3000)

