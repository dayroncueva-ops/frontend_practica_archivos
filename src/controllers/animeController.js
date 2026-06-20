
const animeService=require("../services/animeService");

function list(req,res){
 res.json(animeService.getAll());
}

module.exports={list};
