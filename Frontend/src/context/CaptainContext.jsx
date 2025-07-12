import { useState, useContext, createContext } from "react";

export const CaptainDataContext = createContext();



const CaptainContext = ({children}) => {
    const [captain, setCaptain] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const isUpdateCaptain = (captainData)=>{
        setCaptain(captainData);
    }
    const value = {
        captain,
        setCaptain,
        isLoading,
        setIsLoading,
        error,
        setError,
        isUpdateCaptain
    }
    return (
            <CaptainDataContext.Provider value={value}>
                {children}
            </CaptainDataContext.Provider>
    )
}


export default CaptainContext;