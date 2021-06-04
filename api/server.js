const express = require('express')
const server = express()
const projectsRouter = require('./projects/projects-router')
const actionsRouter = require('./actions/actions-router')

server.use(express.json())
server.use('/api/projects', projectsRouter)
server.use('/api/actions', actionsRouter)

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      custom: 'something went wrong with your request',
      message: err.message,
      stack: err.stack,
    })
  })

server.get('/', (req, res) => {
    res.send(`<h2>Testing, testing.</h2>`);
  });

module.exports = server;



