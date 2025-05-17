import Header from "../../Components/Header/Header";
import { useContext, useEffect, useState } from "react";
import DataContext from "../../hooks/context/DataContext";

function Projects(){
    const {data} = useContext(DataContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(data.projects){
            setLoading(false);
        }
    }, [data]);

    return loading ? <><i className="fa-solid fa-spinner fa-spin"></i></> : (
        <>
            <Header page="projects"/>
            <main className="main">
                <section className="projects">
                    {
                        data.projects.map((item, index) => 
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
                                    <h3 className="projects__item--title">{item.title}</h3>
                                    <p className="projects__item--year">{item.year == 31 ? `${data.global.internship} 1` : `${data.global.year} ${item.year}`}</p>
                                </article>
                            </a>
                        )
                    }
                </section>
            </main>
        </>
    )
}

export default Projects;