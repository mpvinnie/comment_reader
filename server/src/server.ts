import express from 'express'
import cors from 'cors'
import path from 'path'

import './database'
import { routes } from './routes'

import './containers'

const app = express()
app.use(cors())

app.use(express.json())
app.use('/audios', express.static(path.resolve(__dirname, '..', 'tmp')))
app.use(routes)

app.listen(3333, () => {
  console.log('Server running on port 3333!')
})