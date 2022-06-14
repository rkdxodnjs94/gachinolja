const {createProxyMiddleware} = require('http-proxy-middleware');``
module.exports = function(app) {
    app.use('/api/',
    createProxyMiddleware( 
        { target: 'http://localhost:4001/', changeOrigin: true }
    ));
    app.use('/v1/nid/me',
    createProxyMiddleware(
        { target: "https://openapi.naver.com/", changeOrigin: true}
    ));
}