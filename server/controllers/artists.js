var express = require('express');
var router = express.Router();
var app = express();

router.get('/',function(req,res){
    res.send('<h1>Artists</h1>')
}); 

router.get('/:id',function(req,res){
    res.send('<h1>Artists ' + req.params.id + '</h1>')
}); 

module.exports = router;