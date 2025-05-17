import { createContext, useEffect, useState } from "react";
import dutch from "../../assets/dutch.json";
import english from "../../assets/english.json";

const DataContext = createContext(null);

const DataProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [isEnglish, setIsEnglish] = useState(false);
    
    useEffect(() => {
        const getLanguage = localStorage.getItem("isEnglish");
        if(getLanguage === 'true'){
            setData(english);
            setIsEnglish(true);
        }
        else{
            setData(dutch);
            setIsEnglish(false);
        }
    }, []);

    const setLanguage = (language) => {
        localStorage.setItem("isEnglish", language);
        setData(language ? english : dutch);
        setIsEnglish(language);
    }

    return(
        <DataContext.Provider value={{data, isEnglish, setLanguage}}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContext;
export {DataProvider};