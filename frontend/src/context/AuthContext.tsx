import {createContext, useState} from 'react'

export const AuthContext = createContext(null);

export function AuthProvider ({children}) {

    // los variables a heredar a los componentes
    const [email,setEmail] = useState (localStorage.getItem("email")||nulll); 

    const login = (userEmail) => { third }

    return ( 
        <AuthContext.Provider
            value = {{email}}>
                {children}
            </AuthContext.Provider>
    )

}

// todo lo de value es lo q componentes hijos pueden leer y usar con useContext(AuthContext)
// componentes como Perfil, Navbar...