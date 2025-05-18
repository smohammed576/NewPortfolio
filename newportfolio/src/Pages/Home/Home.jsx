import { useContext, useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import DataContext from "../../hooks/context/DataContext";
import Movies from "../../Components/Movies/Movies";
import Contact from "../../Components/Contact/Contact";
import About from "../../Components/About/About";
import Work from "../../Components/Work/Work";

function Home(){
    const {data} = useContext(DataContext);
    const [loading, setLoading] = useState(true);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if(data.global){
            setLoading(false);
        }
    }, [data]);

    return loading ? <><i className="fa-solid fa-spinner fa-spin"></i></> : (
        <>
            <section className="heading">
                <article className="heading__wrapper">
                    <h1 className="heading__title">{data.global.hello}</h1>
                    <h2 className="heading__intro">{data.global.intro}</h2>
                    <a href="#about" className="heading__button">{data.global.view}</a>
                </article>
            </section>
            <Header page="home"/>
            <main className="main">
                <About/>
                <Movies/>
                <Work/>
            </main>
            <Contact/>
            <Footer/>
        </>
    )
}

export default Home;