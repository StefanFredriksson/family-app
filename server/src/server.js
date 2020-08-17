const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const app = express()

const init = () => {
  const port = process.env.PORT || 4000

  app.use(bodyParser.json())
  app.use(cors())
  app.use(express.static(path.join(__dirname, 'public')))
  app.use('/', require('./routes/stream'))
  app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`)
  })
}

init()
