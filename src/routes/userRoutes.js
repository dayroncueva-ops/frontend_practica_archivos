
const router=require("express").Router();
const controller=require("../controllers/userController");

router.post("/favorites",controller.addFavorite);
router.delete("/favorites",controller.removeFavorite);

router.post("/history",controller.addHistory);
router.delete("/history",controller.removeHistory);

module.exports=router;
