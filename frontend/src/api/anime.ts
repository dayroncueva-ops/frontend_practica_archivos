import api from "./api";

export const getAnimes = () => {
    return api.get("/api/anime/list");
};
