const { newUser } = require('../api/user/controllers')

module.exports = (router) => {
    router.post('/user/new', newUser)
}