const proxy = require('http-proxy-middleware');

module.exports = function(app) {

    app.use(proxy("http://localhost:8080/contact", { target: "http://localhost:3000"}));
};