import { useContext, useEffect, useState } from "react";
import DataContext from "../../hooks/context/DataContext";
import LoadingAbout from "./LoadingAbout";

function About(){
    const {data} = useContext(DataContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(data.about){
            setLoading(false);
        }
    }, [data]);

    return loading ? <LoadingAbout/> : (
        <section id="about" className="about">
            <h2 className="home__title">{data.global.about}</h2>
            <p className="about__text">{data.about}</p>
        </section>
    )
}

export default About;