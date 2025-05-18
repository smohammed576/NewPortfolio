import { useSearchParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { useContext, useEffect, useState } from "react";
import DataContext from "../../hooks/context/DataContext";
import Loading from "../../Components/Loading/Loading";

function Project(){
    const {data} = useContext(DataContext);
    const [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(true);
    const [project, setProject] = useState([]);

    useEffect(() => {
        if(data.projects){
            console.log(data);
            if(searchParams.get("id")){
                setProject(data.projects[searchParams.get("id")]);
            }
            else{
                setProject(data.projects.find((item) => item.title === searchParams.get("name")));
            }
            setLoading(false);
        }
    }, [data]);

    return loading ? <Loading page="project"/> : (
        <>
            <Header page="project"/>
            <main className="main">
                <section className="project">
                    <a href="/projects" className="project__return">BACK TO PROJECTS</a>
                    <span className="project__wrapper">
                        <figure className="project__figure">
                            <img src={project.image} alt={project.title} className="project__figure--image" />
                            <div className="project__figure--wrapper">
                                {
                                    project.links?.map((item, index) => 
                                        <a href={item.link} className="project__figure--link" target="_blank" key={index}>
                                            <i className={`${item.icon} project__figure--link-icon`}/>
                                        </a>
                                    )
                                }
                            </div>
                        </figure>
                        <div className="project__info">
                            <article className="project__info--wrapper">
                                <h2 className="project__info--title">{project.title}</h2>
                                <h3 className="project__info--year">{project.year == 31 ? `${data.global.internship} 1` : `${data.global.year} ${project.year}`}</h3>
                                <p className="project__info--description">{project.description}</p>
                            </article>
                            <span className="project__info--list">
                                {
                                    project.languages.map((item, index) => 
                                        <article className={`project__info--item project__info--item-${item}`} key={index}>{item}</article>
                                    )
                                }
                            </span>
                        </div>
                    </span>
                </section>
            </main>
        </>
    )
}

export default Project;