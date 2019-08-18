import express from "express";

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(["Tony","Lisa","Michael","Ginger","Food"]);
});

module.exports = router;
