
const authService=require("../services/authService");

function register(req,res){
 try{
  res.status(201).json(
   authService.register(req.body)
  );
 }catch(error){
  res.status(400).json({message:error.message});
 }
}

function login(req,res){
 try{
  res.json(authService.login(req.body));
 }catch(error){
  res.status(401).json({message:error.message});
 }
}

module.exports={register,login};
