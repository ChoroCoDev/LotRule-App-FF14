import Link from 'next/link'
import { JobSet } from '@/class'
import React from 'react'

async function getJobs(): Promise<JobSet[]> {
  const res = await fetch('http://localhost:3000/api/jobs')
  return res.json()
}

type RoleCount = { [key: string]: number }

// export default async function Home() {
//   const jobs = await getJobs()

//   return (
//     <>
//       <h1>JobList</h1>
//       {jobs.map((job, index, arr) => {
//         const role = job.role
//         const number = arr
//         return (<div key={job.role + index}>{job.jp.name}</div>)
//       })}
//       <br />
//       <Link href='/'>Home</Link>
//     </>
//   )
// }

export default async function Home() {
  const jobs = await getJobs()

  return (
    <>
      <h1>Job List</h1>
      {jobs.map((job, index, arr) => {
        const role = job.role
        const filter = arr.filter((v, i) => v.role == role && i <= index)

        return (
          <div>
            <span>{job.jp.abb}</span> - <span>{job.role + filter.length}</span> - <span>{job.jp.name}</span>
          </div>
        )
      })}
    </>
  )
}
