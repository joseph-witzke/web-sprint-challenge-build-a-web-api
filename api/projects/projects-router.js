const express = require('express')
const Projects = require('./projects-model')
// const Actions = require('../actions/actions-model')

const router = express.Router();



router.get('/', (req, res, next) => {
  Projects.get()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(next)
})

router.get('/', (req, res) => {
    
})

router.post('/', (req, res) => {
    
})

router.put('/', (req, res) => {
    
})

router.delete('/', (req, res) => {
    
})

router.get('/', (req, res) => {
    
})

module.exports = router;