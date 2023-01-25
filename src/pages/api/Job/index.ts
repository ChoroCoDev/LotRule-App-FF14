import { connect } from 'mongoose'

export const Jobs = async () => {
  const app = await connect('mongodb+srv://admin:admin@cluster0.v1rebjs.mongodb.net/?retryWrites=true&w=majority')
}
