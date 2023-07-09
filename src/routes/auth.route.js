const { login } = require("../api/auth/login");

module.exports = (router) => {
    router.post('/auth/login', login);
}