import express from 'express'
import { router } from './users/user.routes'
import './database'

const app = express()

app.use(express.json())

app.use('/api/users', router)

app.listen(4000, () => {
  console.log('Server is running on port 4000')
})
