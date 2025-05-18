import Header from "../../Components/Header/Header";
import { useContext, useEffect, useState } from "react";
import DataContext from "../../hooks/context/DataContext";
import Loading from "../../Components/Loading/Loading";
import Filters from "../../Components/Filters/Filters";
import Footer from "../../Components/Footer/Footer";

function Projects(){
    const {data} = useContext(DataContext);
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState('');
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        if(data.projects){
            setProjects(data.projects);
            setLoading(false);
        }
    }, [data]);
    
    return loading ? <Loading page="projects"/> : (
        <>
            <Header page="projects"/>
            <main className="main">
                <span className="filters">
                    <span className="filters__buttons">
                        <button onClick={() => setToggle(value => !value)} className="filters__buttons--filter">
                            <i className={`fa-solid fa-caret-${toggle ? 'up' : 'down'} filters__buttons--filter-icon`}></i>
                            Filter
                        </button>
                        {filter !== '' ? <button onClick={() => setFilter('')} className="filters__buttons--reset">RESET</button> : null}
                    </span>
                    {
                        toggle ? 
                            <div className="filters__dropdown">
                                {
                                    data.filters.map((item, index) => 
                                        <button onClick={() => {setFilter(item); setToggle(value => !value)}} className="filters__dropdown--item" key={index}>
                                            {item}
                                        </button>
                                    )
                                }
                            </div> : null
                    }
                </span>
                <section className="projects">
                    {
                        filter == '' ? projects.map((item, index) => 
                            <a href={`/project?${new URLSearchParams({'id': index})}`} className="projects__item" key={index}>
                                <img src={item.image} alt={item.title} className="projects__item--image" />
                                <article className="projects__item--wrapper">
                                    <span className="projects__item--languages">
                                        {
                                            item.languages.map((language, index) => 
                                                <div className={`project__info--item project__info--item-${language}`} key={index}>{language}</div>
                                            )
                                        }
                                    </span>
                                    <span className="projects__item--info">
                                        <h3 className="projects__item--title">{item.title}</h3>
                                        <p className="projects__item--year">{item.year == 31 ? `${data.global.internship} 1` : `${data.global.year} ${item.year}`}</p>
                                    </span>
                                </article>
                            </a>
                        ) : projects.filter((item) => item.languages.includes(filter)).map((item, index) => 
                                <a href={`/project?${new URLSearchParams({'name': item.title})}`} className="projects__item" key={index}>
                                    <img src={item.image} alt={item.title} className="projects__item--image" />
                                    <article className="projects__item--wrapper">
                                        <span className="projects__item--languages">
                                            {
                                                item.languages.map((language, index) => 
                                                    <div className={`project__info--item project__info--item-${language}`} key={index}>{language}</div>
                                                )
                                            }
                                        </span>
                                        <span className="projects__item--info">
                                            <h3 className="projects__item--title">{item.title}</h3>
                                            <p className="projects__item--year">{item.year == 31 ? `${data.global.internship} 1` : `${data.global.year} ${item.year}`}</p>
                                        </span>
                                    </article>
                                </a>
                        )
                    }
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Projects;