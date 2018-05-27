const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')

const app = express()

//graphql route
app.use('/graphql', graphqlHTTP({
  schema
}))

app.listen(4000, () => {
  console.log('now listening for req on port 4000')
})