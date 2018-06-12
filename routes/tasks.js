const Router = require('koa-router')
const router = new Router()

router.get('/', ctx => {
  let result = ctx.db.get('tasks').value()
  ctx.response.type = 'json'
  ctx.body = result
})

module.exports = router.routes()
