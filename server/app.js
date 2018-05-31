const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const config = require('./config')
const cors = require('cors')

const app = express()

app.use(cors())

mongoose.connect(config.db)
mongoose.connection.once('open', () => {
  console.log('connected to db')
})

// graphql route
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(4000, () => {
  console.log('now listening for req on port 4000')
})
