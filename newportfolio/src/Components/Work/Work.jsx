import { useContext, useEffect, useState } from "react";
import DataContext from "../../hooks/context/DataContext";
import LoadingWork from "./LoadingWork";

function Work(){
    const {data} = useContext(DataContext);
    const [loading, setLoading] = useState(true);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if(data.projects){
            setLoading(false);
        }
    }, [data]);

    return loading ? <LoadingWork/> : (
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
    );
}

export default Work;