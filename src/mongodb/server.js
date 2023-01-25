const express = require('express')
const app = express()
const mongoose = require('mongoose')

const jobRouter = require('../mongodb/routes/jobRoutes')

app.use(jobRouter)

/** データベース接続 */
mongoose
  .connect('mongodb+srv://admin:admin@cluster0.v1rebjs.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('データベース接続成功'))
  .catch(err => console.log(err))

app.listen(3001, () => {
  console.log('サーバー起動')
})
