import api from "./api"

export const login = (email, password) => api.post("/api/auth/login",{email,password,});

export  const register = (email, password, name) => api.post("/api/auth/register",{email,password,name,});