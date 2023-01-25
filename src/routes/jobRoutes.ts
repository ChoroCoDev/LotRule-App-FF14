import express from 'express'
import { jobModel } from '../models'

// const express = require('express')
// const jobModel = require('../models/Job')
const app = express()

app.use(express.json())

/** データの取得 */
app.get('/jobs', async (req, res) => {
  // データベースの中のデータを全て返す
  const jobs = await jobModel.find({})
  try {
    res.send(jobs)
  } catch (err) {
    res.status(500).send(err)
  }
})

/** データの作成 */
app.post('/job', async (req, res) => {
  const job = new jobModel(req.body)

  try {
    await job.save()
    res.send(job)
  } catch (err) {
    res.status(500).send(err)
  }
})

/** データの部分修正 */
app.patch('/job/:id', async (req, res) => {
  try {
    await jobModel.findByIdAndUpdate(req.params.id, req.body)
    await jobModel.updateOne()
  } catch (err) {
    res.status(500).send(err)
  }
})

/** データの削除 */
app.delete('/job/:id', async (req, res) => {
  try {
    await jobModel.findByIdAndDelete(req.params.id)
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = app
