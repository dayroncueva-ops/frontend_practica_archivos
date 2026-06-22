import api from "./api"

export const login = (email:string, password:string) => api.post("/api/auth/login",{email,password,});

export  const register = (email:string, password:string, name:string) => api.post("/api/auth/register",{email,password,name,});