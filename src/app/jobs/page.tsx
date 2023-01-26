import Link from 'next/link'
import { JobSet } from '../../pages/api/jobs'

async function getJobs(): Promise<JobSet[]> {
  const res = await fetch('http://localhost:3000/api/jobs')
  console.log(res)
  return res.json()
}

export default async function Home() {
  const jobs = await getJobs()

  return (
    <>
      <h1>JobList</h1>
      {jobs.map(job => {
        ;<div>{job.jp.name}</div>
      })}
      <Link href='/'>Home</Link>
    </>
  )
}
