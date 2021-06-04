const express = require('express')
const Projects = require('./projects-model')

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

router.delete('/:id', validateProjectId, (req, res, next) => {
  Projects.remove(req.params.id)
    .then(() => {
        res.status(200).json({ message: 'The project has been exterminated! '})
    })
    .catch(next)
})

router.get('/:id/actions', validateProjectId, (req, res, next) => {
  Projects.getProjectActions(req.params.id)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(next)
})

module.exports = router;