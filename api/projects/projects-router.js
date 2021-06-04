const express = require('express')
const Projects = require('./projects-model')
// const Actions = require('../actions/actions-model')

const { validateProjectId, validateProject } = require('../middleware/middleware')

const router = express.Router();



router.get('/', (req, res, next) => {
  Projects.get()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(next)
})

router.get('/:id', validateProjectId, (req, res) => {
    res.status(200).json(req.project)
})

router.post('/', validateProject, (req, res, next) => {
  Projects.insert(req.body)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(next)
})

router.put('/:id', validateProjectId, validateProject, (req, res, next) => {
  Projects.update(req.params.id, req.body)
    .then(() => {
        return Projects.get(req.params.id)
    })
    .then(project => {
        res.status(200).json(project)
    })
    .catch(next)
})

router.delete('/', (req, res) => {
    
})

router.get('/', (req, res) => {
    
})

module.exports = router;