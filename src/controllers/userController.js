
const userService=require("../services/userService");

function addFavorite(req,res){
 try{
  res.json(userService.addFavorite(req.body));
 }catch(error){
  res.status(400).json({message:error.message});
 }
}

function removeFavorite(req,res){
 try{
  res.json(userService.removeFavorite(req.body));
 }catch(error){
  res.status(400).json({message:error.message});
 }
}

function addHistory(req,res){
 try{
  res.json(userService.addHistory(req.body));
 }catch(error){
  res.status(400).json({message:error.message});
 }
}

function removeHistory(req,res){
 try{
  res.json(userService.removeHistory(req.body));
 }catch(error){
  res.status(400).json({message:error.message});
 }
}

module.exports={
 addFavorite,
 removeFavorite,
 addHistory,
 removeHistory
};
