import { Schema, model } from 'mongoose'

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

export const jobModel = model('Job', JobSchema)
