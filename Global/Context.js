import React, {createContext,useState} from "react";


const MyContext = createContext();

const MyProvier = ({child}) => {
    const [val,setVal] = useState(0);
    const [val1,setVal1] = useState(1);
    const [val2,setVal2] = useState(2);
    return (
        <MyContext.Provider value={{
            val,setVal,
            val1,setVal1,
            val2,setVal2
        }}>
            {child}
        </MyContext.Provider>
    )
}


export {MyProvier,MyContext}
