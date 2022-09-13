
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Landing page')
})
app.get('/about', (req, res) => {
  res.send('About page')
})
app.get('/hid', (req, res) => {
  res.send('vollah you found a hidden page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
