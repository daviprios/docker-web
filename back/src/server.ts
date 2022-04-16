import express from 'express'
import cors from 'cors'

const server = express()

server.use(cors({ origin: '*' }))

server.get('/', (req, res) => {
  return res.send('Hello World!')
})

server.listen(8000)