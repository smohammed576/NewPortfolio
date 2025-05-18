import { useContext, useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import DataContext from "../../hooks/context/DataContext";
import Movies from "../../Components/Movies/Movies";
import Contact from "../../Components/Contact/Contact";

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
                <section id="about" className="about">
                    <h2 className="home__title">{data.global.about}</h2>
                    <p className="about__text">{data.about}</p>
                </section>
                <Movies/>
                <section id="projects" className="work">
                    <h2 className="home__title">{data.global.projects}</h2>
                    <div className="work__wrapper">
                        <img src={data.projects[index].image} alt={data.projects[index].title} className="work__image" />
                        <article className="work__info">
                            <h3 className="work__info--title">{data.projects[index].title}</h3>
                            <p className="work__info--text">{data.projects[index].description.slice(0, 100)}... 
                                <a href={`/project?${new URLSearchParams({'id': index})}`} className="work__info--text-link"> {data.global.readmore}</a>
                            </p>
                            <span className="work__info--list">
                                {
                                    data.projects[index].languages.map((item, index) => 
                                        <span className={`project__info--item project__info--item-${item}`} key={index}>{item}</span>
                                    )
                                }
                            </span>
                            {
                                data.projects[index].links ? 
                                <div className="work__info--links">
                                    {
                                        data.projects[index].links.map((item, index) => 
                                            <a href={item.link} className="work__info--links-item" key={index}>
                                                {item.name}
                                                <i className={`${item.icon} work__info--links-icon`}/>
                                            </a>
                                        )
                                    }
                                </div>
                                : null
                            }
                        </article>
                    </div>
                    <span className="work__buttons">
                        {
                            Array.from({length: 3}, (_,i) => 
                                <button onClick={() => setIndex(i)} className="work__buttons--item" key={i}>
                                    <i className={`fa-${index == i ? 'solid' : 'regular'} fa-circle-dot work__buttons--item-dot`}/>
                                </button>
                            )
                        }
                    </span>
                    <a href="/projects" className="work__link">{data.global.more} <i className="fa-solid fa-arrow-right work__link--icon"></i></a>
                </section>
            </main>
            <Contact/>
            <Footer/>
        </>
    )
}

export default Home;