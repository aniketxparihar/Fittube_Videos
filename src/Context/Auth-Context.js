import { useContext, createContext, useState,useEffect } from "react"


const AuthContext = createContext();

const AuthProvider = (props) => {

    const [foundUser, setFoundUser] = useState(null);
    const [createdUser, setCreatedUser] = useState(null);
    const [authToken, setAuthToken] = useState("");
    const createdUserHandler = (data) => {
        setCreatedUser(data);
    }
    const userHandler = (data) => {
        setFoundUser(data);
    }

    const tokenHandler = (data) => {
        setAuthToken(data);
    }
    return (
        <AuthContext.Provider value={{ foundUser, authToken, userHandler, tokenHandler,createdUser,createdUserHandler }}>
            {props.children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };