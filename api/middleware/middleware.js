const Project = require('../projects/projects-model')

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


  module.exports = {
      validateProjectId,
      validateProject,
  }