import { connect } from 'mongoose'

connect('mongodb://localhost:27017/mvc')
  .then((db) => {
    console.log('DB is connected', db.connection.host)
  })
  .catch((err) => {
    console.error(err)
  })
