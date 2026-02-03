const express = require('express')
var cors = require('cors')
const app=express()
const port=3000
app.use(cors())
app.get('/', (req, res) => {
  res.json('Hello World')
})
app.get('/user/:id', (req, res) => {
  //const q=req.params
  //console.log(q.id)
  const q=req.query
  console.log(q.q)
  console.log(q.name)
  res.json({'userid':q.name})
})
app.get('/cat', (req, res) => {
  res.json({'sound':'멍멍'})
})
app.listen(port, () => {
  console.log('Example app listening on port ${port}')
})