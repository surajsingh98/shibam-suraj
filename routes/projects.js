var data = require('../data-store');
var projects = data.getProjects();
var router = require('express').Router();
router.get('/', function(req, res, next) {
    response={
        'body': projects,
        'status':200
    }
    res.status(200).send(projects);
  });
router.get('/active',function(req, res, next) {
    res.status(200).send(data.getProjects().filter(p => p.isActive));
  })  
  router.get('/:id',function(req, res, next) {
      var id = req.params.id
    projects.forEach((ele)=>{
        if(ele.id == id){
            res.status(200).send(ele);
        }
    })
    res.status(404).send({message : 'No Project Found'});
  })

module.exports = router;
