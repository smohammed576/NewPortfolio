import { useContext, useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import DataContext from "../../hooks/context/DataContext";
import Movies from "../../Components/Movies/Movies";
import Contact from "../../Components/Contact/Contact";
import About from "../../Components/About/About";
import Work from "../../Components/Work/Work";
import Loading from "../../Components/Loading/Loading";

function Home(){
    const {data} = useContext(DataContext);
    const [loading, setLoading] = useState(true);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if(data.global){
            setLoading(false);
        }
    }, [data]);

    // return loading ? <main className="main"><i className="fa-solid fa-spinner fa-spin"></i></main> : (
    return loading ? <Loading/> : (
        <>
            <section className="heading">
                <div className="heading__wrapper">
                    {Array.from({length: 5}, (_,index) => <figure className="heading__dot" key={index}></figure>)}
                    <article className="heading__text">
                        <h1 className="heading__text--title">{data.global.hello}</h1>
                        <h2 className={data.global.class}>
                        </h2>
                    </article>
                    <a href="#main" className="heading__button">{data.global.view}</a>
                </div>
            </section>
            <Header page="home"/>
            <main id="main" className="main">
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