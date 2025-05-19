import { useContext, useEffect, useState } from "react";
import DataContext from "../../hooks/context/DataContext";

function Header(props){
    const {data, isEnglish, setLanguage} = useContext(DataContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(data.global){
            setLoading(false);
        }
    }, [data]);

    return props.page === "home" ? (
        <header className="header">
            <nav className="header__navigation">
                {
                    loading ? 
                        
                        Array.from({length: 3}, (_,index) => 
                            <figure className="header__navigation--loading" key={index}></figure>    
                        )
                        
                    : 
                    <>
                        <a href="#about" className="header__navigation--item">{data.global.about}</a>
                        <a href="#projects" className="header__navigation--item">{data.global.projects}</a>
                        <a href="#contact" className="header__navigation--item">Contact</a>
                    </>
                }
                
            </nav>
            {
                loading ? 
                    <figure className="header__button header__loading"></figure>
                : 
                <button onClick={() => setLanguage(isEnglish ? false : true)} className="header__button">
                    <i className="fa-solid fa-earth-americas header__button--icon"/>
                    {data.global.lang}
                </button>
            }
        </header>
    ) : (
        <header className="header header__projects">
            <a href="/" className="header__link">Portfolio</a>
            {
                loading ? 
                    <figure className="header__button header__loading"></figure>
                : 
                <button onClick={() => setLanguage(isEnglish ? false : true)} className="header__button">
                    <i className="fa-solid fa-earth-americas header__button--icon"/>
                    {data.global.lang}
                </button>
            }
        </header>
    )
}

export default Header;