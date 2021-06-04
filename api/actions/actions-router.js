const express = require('express')
const Actions = require('./actions-model')

// const { validateProjectId, validateProject } = require('../middleware/middleware')

const router = express.Router();

router.get('/', (req, res, next) => {
  Actions.get()
    .then(action => {
        res.status(200).json(action)
    })
    .catch(next)
})

router.get('/:id', (req, res) => {
    
})

router.post('/', (req, res) => {
    
})

router.put('/:id', (req, res) => {
    
})

router.delete('/:id', (req, res) => {
    
})

module.exports = router;