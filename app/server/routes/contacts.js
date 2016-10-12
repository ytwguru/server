import Express from "express";

var router = Express.Router();

router.get("/", function(req, res){
  res.send('respond with a resource')
});

export default router;