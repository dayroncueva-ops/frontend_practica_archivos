import api from "./api"

export const addFavorite = (email:string, animeId:number) => {
    return api.post("/api/user/favorites", {email,animeId,});
};

export const removeFavorite = (email:string, animeId:number) => {
    return api.delete("/api/user/favorites", {data:{email, animeId,} , });
};

export const addHistory = (email:string, animeId:number, status:string) => {
    return api.post("/api/user/history",{email, animeId,status,});
};
// para eliminar no se necesita status
export const removeHistory = (email:string, animeId:number) => {
    return api.delete("/api/user/history",{data:{email, animeId,},});
};