import { Schema, model, connect } from 'mongoose'
// const mongoose = require('mongoose')

interface Job {
  name: string
  abb: string
  role: string
}

const JobSchema = new Schema<Job>({
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

export const jobModel = model<Job>('Job', JobSchema)

const run = async () => {
  await connect('mongodb+srv://admin:admin@cluster0.v1rebjs.mongodb.net/?retryWrites=true&w=majority')

  const job = new jobModel()

  await job.save()
}

// export const Job = model('Job', JobSchema)

// module.exports = Job
