
const users=require("../data/users");

function register(dto){
 if(users.find(u=>u.email===dto.email)){
   throw new Error("Usuario ya existe");
 }
 users.push({...dto,favorites:[],history:[]});
 return {message:"Usuario registrado"};
}

function login(dto){
 const user=users.find(
  u=>u.email===dto.email && u.password===dto.password
 );
 if(!user) throw new Error("Credenciales incorrectas");

 return {
  email:user.email,
  name:user.name
 };
}

module.exports={register,login};
