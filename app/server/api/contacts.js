import Express from "express";

var router = Express.Router();

router.get("/", function(req, res){
  res.send('respond with a resource')
});

router.post("/", function(req, res){
  console.log(req.body);
  res.send({
    success : true
  });
});

export default router;