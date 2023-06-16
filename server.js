require('dotenv').config()
import express, { json, urlencoded, static as serveStatic} from 'express'
import cookieParser from 'cookie-parser'
import { sequelize } from './app/models'
import logger from 'morgan'

const app = express()

app.use(logger('dev'))
app.use(json())
app.use(urlencoded({
  extended: true
}))
app.use(cookieParser())
app.use(serveStatic('app/public'))

// Set app config
const title = process.env.DB_DEV_NAME
const port = process.env.PORT
const baseUrl = process.env.URL + port

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, x-access-token'
  )
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
    return res.status(200).json({})
  }
  next()
})

require('./app/router/router.js')(app)

sequelize.sync().then(() => {
  app.listen(port, () => console.log(title + ' run on ' + baseUrl))
})