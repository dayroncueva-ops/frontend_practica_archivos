
const users=require("../data/users");

function addFavorite(dto){
 const user=users.find(u=>u.email===dto.email);
 if(!user) throw new Error("Usuario no encontrado");

 if(!user.favorites.includes(dto.animeId)){
   user.favorites.push(dto.animeId);
 }
 return user.favorites;
}

function removeFavorite(dto){
 const user=users.find(u=>u.email===dto.email);
 if(!user) throw new Error("Usuario no encontrado");

 user.favorites=user.favorites.filter(
   id=>id!==dto.animeId
 );

 return user.favorites;
}

function addHistory(dto){
 const user=users.find(u=>u.email===dto.email);
 if(!user) throw new Error("Usuario no encontrado");

 user.history.push({
   animeId:dto.animeId,
   status:dto.status
 });

 return user.history;
}

function removeHistory(dto){
 const user=users.find(u=>u.email===dto.email);
 if(!user) throw new Error("Usuario no encontrado");

 user.history=user.history.filter(
   h=>h.animeId!==dto.animeId
 );

 return user.history;
}

module.exports={
 addFavorite,
 removeFavorite,
 addHistory,
 removeHistory
};
