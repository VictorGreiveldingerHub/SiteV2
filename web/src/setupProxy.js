const proxy = require('http-proxy-middleware');

module.exports = function(app) {

    app.use(proxy("http://localhost:3000", { target: "http://localhost:8080"}));
};