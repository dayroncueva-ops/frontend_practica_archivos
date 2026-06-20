import api from "/.api"

export const login = (data) => api.post("/api/auth/login");

export  const register = (data) => api.post("/api/auth/register");