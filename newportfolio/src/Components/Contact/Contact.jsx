import { useContext, useEffect, useState } from "react";
import DataContext from "../../hooks/context/DataContext";
import Loading from "../Loading/Loading";

function Contact(){
    const {data} = useContext(DataContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(data.contacts){
            setLoading(false);
        }
    }, [data]);

    return loading ? <Loading/> : (
        <section id="contact" className="contact">
            <h2 className="home__title">Contact</h2>
            <article className="contact__links">
                {
                    data.contacts.map((item, index) => 
                        <a href={item.link} className="contact__links--item" target="_blank" key={index}>
                            <i className={`${item.icon} contact__links--item-icon`}/>
                        </a>
                    )
                }
            </article>
        </section>
    );
}

export default Contact;