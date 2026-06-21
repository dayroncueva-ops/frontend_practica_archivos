import api from "./api"

export const addFavorite = (email, animeId) => {
    return api.post("/api/user/favorites", {email,animeId,});
};

export const removeFavorite = (email, animeId) => {
    return api.delete("/api/user/favorites", {data:{email, animeId,} , });
};

export const addHistory = (email, animeId, status) => {
    return api.post("/api/user/history",{email, animeId,status,});
};
// para eliminar no se necesita status
export const removeHistory = (email, animeId,) => {
    return api.delete("/api/user/history",{data:{email, animeId,},});
};