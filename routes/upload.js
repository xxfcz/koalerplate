const Router = require('koa-router')
const router = new Router()
const fs = require('fs')
const path = require('path')

router.post('/', async (ctx) => {
  const filePaths = []
  const files = ctx.request.files || {} // 使用 ctx.request.files 取得上传的文件列表

  for (let key in files) {
    const file = files[key]
    let localPath = path.join(__dirname, '../public/upload')
    localPath = path.join(localPath, file.name)
    const reader = fs.createReadStream(file.path)  // 从已暂存的文件中读
    const writer = fs.createWriteStream(localPath) // 写入目标文件
    reader.pipe(writer)
    filePaths.push(localPath)
  }

  ctx.body = filePaths
})

module.exports = router.routes()