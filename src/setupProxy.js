const { createProxyMiddleware } = require('http-proxy-middleware')
 
module.exports = function(app) {
  app.use(createProxyMiddleware('/api', {
    "target": "https://mock.yonyoucloud.com/mock/5859/test",
    "changeOrigin": true,
    pathRewrite: {
      "^/api": ""
     },
  }))
}