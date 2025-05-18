import { useContext, useEffect, useState } from "react";
import DataContext from "../../hooks/context/DataContext";
import Loading from "../Loading/Loading";

function Movies(){
    const {data} = useContext(DataContext);
    const [loading, setLoading] = useState(true);
    const [toggle, setToggle] = useState(false);
    const [array, setArray] = useState([]);
    const [index, setIndex] = useState(0);
    const [info, setInfo] = useState(false);
    
    function randomNumber(range, count){
        let numbers = new Set();
        while(numbers.size < count){
            numbers.add(Math.floor(Math.random() * (range - 1 + 1) + 1));
        }
        setArray([...numbers]);
        return [...numbers];
    }

    useEffect(() => {
        if(data.movies){
            setLoading(false);
        }
    }, [data]);

    function modalClose(event){
        if(event.target.className === "movies__info--background"){
            setInfo(false);
        }
    }

    useEffect(() => {
        if(info == true){
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = "1.5rem";
        }
        else{
            document.body.style.overflow = "unset";
            document.body.style.paddingRight = 0;
        }
    }, [info]);

    return loading ? <Loading/> : (
        <section className="movies">
            <span className="movies__heading">
                <button onClick={() => {randomNumber(data.movies.length - 1, data.movies.length - 1); setToggle(value => !value)}} className="movies__heading--button">
                    {data.global.click}
                    <i className={`fa-solid fa-arrow-${toggle ? 'up' : 'down fa-bounce'} movies__heading--button-icon`}/>
                </button>
            </span>
            {
                toggle ? 
                    <div className="movies__wrapper">
                        <i onClick={() => setInfo(true)} className="fa-solid fa-info fa-bounce movies__info"/>
                        {
                            info ? 
                                <div onClick={(event) => modalClose(event)} className="movies__info--background">
                                    <article className="movies__info--card">
                                        <h3 className="movies__info--card-text">{data.global.info}</h3>
                                    </article>
                                </div>
                            : null
                        }
                        <h2 className="movies__title">{data.global.movies}</h2>
                        <article className="movies__item">
                            <img src={data.movies[array[index]].image} alt={data.movies[array[index]].title} className="movies__item--image" />
                            <div className="movies__item--wrapper">
                                <p className="movies__item--title">{data.movies[array[index]].title}</p>
                                <button onClick={() => {index + 1 === array.length ? setIndex(0) : setIndex(index + 1) }} className="movies__item--button">Random</button>
                            </div>
                        </article>
                    </div>
                : null
            }
        </section>
    );
}

export default Movies;