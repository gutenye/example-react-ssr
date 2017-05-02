import React from 'react'
import express from 'express'
import createHtml from './server/html'
import { renderToString } from 'react-dom/server'
import path from 'path'
import App from './App'
global.pd = console.log.bind(console)

const app = express()
const PORT = process.env.PORT || '80'

app.use(express.static(path.resolve('.')))

app.get('*', (req, res, next) => {
  const app = (
    <App />
  )
  let html = renderToString(app)
  html = createHtml({html})
  res.status(200).send(html)
})

app.listen(PORT, () => {
  console.log(`> Listen on ${PORT}`)
})
