import { Button } from '@mui/material'
import { connect } from 'mongoose'
import Link from 'next/link'

const getJobs = async () => {
  const res = await connect('mongodb+srv://admin:admin@cluster0.v1rebjs.mongodb.net/?retryWrites=true&w=majority')
    .then(res => res)
    .catch(err => err)
}

export default function Home() {
  return (
    <>
      <h1>Hello LotRuleAppFF14</h1>
      <Link href='/jobset'>JobSet</Link>
      <>
        <Button variant='contained'>Hello World</Button>
      </>
    </>
  )
}
