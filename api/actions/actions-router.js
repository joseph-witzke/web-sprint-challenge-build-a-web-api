const express = require('express')
const Actions = require('./actions-model')

const { validateActionId, validateAction } = require('../middleware/middleware')

const router = express.Router();

router.get('/', (req, res, next) => {
  Actions.get()
    .then(action => {
        res.status(200).json(action)
    })
    .catch(next)
})

router.get('/:id', validateActionId, (req, res) => {
  res.json(req.action)
})

router.post('/', validateAction, (req, res, next) => {
  Actions.insert(req.body)
    .then(action => {
        res.status(201).json(action)
    })
    .catch(next)
})

router.put('/:id', validateActionId, validateAction, (req, res, next) => {
  Actions.update(req.params.id, req.body)
    .then(() => {
        return Actions.get(req.params.id)
    })
    .then(action => {
        res.status(200).json(action)
    })
    .catch(next)
})

router.delete('/:id', validateActionId, (req, res, next) => {
  Actions.remove(req.params.id)
    .then(() => {
        res.status(200).json({message: "The action has been terminated"})
    })
    .catch(next)
      
})

module.exports = router;