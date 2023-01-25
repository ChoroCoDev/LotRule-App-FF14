import { connect } from 'mongoose'

const getJobs = async () => {
  const res = await connect('mongodb+srv://admin:admin@cluster0.v1rebjs.mongodb.net/?retryWrites=true&w=majority')
    .then(res => res)
    .catch(err => err)
}

export default function Home() {
  return (
    <>
      <h1>Hello Nextjs13</h1>
    </>
  )
}
