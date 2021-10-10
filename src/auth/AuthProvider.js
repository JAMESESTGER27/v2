const { createContext, useState } = require("react");




export const AuthContext = createContext();

const AuthProvider = ({children}) =>{
    const [user,setUser] = useState(null);


    const contextValue = {
        user,
        login(){
            setUser({id:1,username:"jamesestgter"})
        },
        logout(){
            setUser(null)
        },
        isLogged(){
            return !!user
        }
    }
    return (
    <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
    )
}

export default AuthProvider;