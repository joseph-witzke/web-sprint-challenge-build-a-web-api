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


  module.exports = {
      validateProjectId,
  }