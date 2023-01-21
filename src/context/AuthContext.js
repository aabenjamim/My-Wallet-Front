import { createContext, useState } from "react";

export const AuthContext = createContext()

export default function AuthProvider({children}){

    const [image, setImage] = useState('')

    return(
        <AuthContext.Provider value={{image}}>
            {children}
        </AuthContext.Provider>
    )
}

