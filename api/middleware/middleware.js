const Project = require('../projects/projects-model')
const Action = require('../actions/actions-model')

//Projects Middleware

function validateProjectId(req, res, next) {
    Project.get(req.params.id)
      .then(project => {
        if (!project) {
          res.status(404).json({
            error: 'project not found'
          })
        } else {
          req.project = project
          next()
        }
      })
      .catch(err => {
        next(err)
      })
  }

  function validateProject(req, res, next) {
    if (!req.body.name || !req.body.description) {
      res.status(400).json({message: 'missing required field' })
    } else {
      req.project = (req.body)
      next( )
    }
  }

  //Actions Middleware

  function validateActionId(req, res, next) {
    Action.get(req.params.id)
      .then(action => {
        if (!action) {
          res.status(404).json({
            error: 'action not found'
          })
        } else {
          req.action = action
          next()
        }
      })
      .catch(next)
  }



  module.exports = {
      validateProjectId,
      validateProject,
      validateActionId,
  }