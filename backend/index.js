import express, { json } from 'express'
import chalk from 'chalk'
const app = express()
const port = 3001

import routes from './routes'

/* middleware */
app.use(json()) // body-parser

app.use('/api', routes)

app.listen(port, function () {
  console.log(chalk.greenBright(`application is listening on port ${port}...`))
})
