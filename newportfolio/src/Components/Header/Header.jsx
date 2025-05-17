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

    return loading ? <><i className="fa-solid fa-spinner fa-spin"></i></> : props.page === "home" ? (
        <header className="header">
            <nav className="header__navigation">
                <a href="#about" className="header__navigation--item">{data.global.about}</a>
                <a href="#projects" className="header__navigation--item">{data.global.projects}</a>
                <a href="#contact" className="header__navigation--item">Contact</a>
            </nav>
            <button onClick={() => setLanguage(isEnglish ? false : true)} className="header__button">{data.global.lang}</button>

        </header>
    ) : (
        <header className="header">
            <a href="/" className="header__link">Portfolio</a>
            <button onClick={() => setLanguage(isEnglish ? false : true)} className="header__button">{data.global.lang}</button>
        </header>
    )
}

export default Header;