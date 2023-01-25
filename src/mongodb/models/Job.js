const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // 空白削除
  },
  abb: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    trim: true,
  },
})

const Job = mongoose.model('Job', JobSchema)

module.exports = Job
