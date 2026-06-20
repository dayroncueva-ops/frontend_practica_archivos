
const router=require("express").Router();
const controller=require("../controllers/animeController");

router.get("/list",controller.list);

module.exports=router;
