
import React, { useState } from "react";

export const LoginContext = React.createContext();

const Login = ({ children }) => {
    const [result, updateResult] = useState(0);
    const [token, setToken] = useState("");

    return (
        <LoginContext.Provider
            value={{
                result,
                token
            }}
        >
            {children}
        </LoginContext.Provider>
    );
};

export default Login;
