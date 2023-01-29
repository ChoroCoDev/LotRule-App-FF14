import { InputText } from '@/Components'
import { FF14Job } from '@/class'
import React from 'react'

async function getJobs(): Promise<FF14Job[]> {
  const res = await fetch('http://localhost:3000/api/FF14Jobs')
  return res.json()
}

export default async function Home() {
  const jobs = await getJobs()

  return (
    <>
      <h1>Job Set</h1>
      <InputText label='プレイヤー名' id='player-name' />
      {/* <label htmlFor='player-name'>プレイヤー名</label>
      <br />
      <input type='text' id='player-name' /> */}

      {jobs.map((job, index, arr) => {
        const role = job.role

        return <div key={job.id}>{`${role} - ${job.type ? job.type + ' - ' : ''} ${job.name.jp}`}</div>
      })}
    </>
  )
}
