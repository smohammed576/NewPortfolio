import { useContext, useEffect, useState } from "react";
import DataContext from "../../hooks/context/DataContext";

function Movies(){
    const {data} = useContext(DataContext);
    const [loading, setLoading] = useState(true);
    const [toggle, setToggle] = useState(false);
    const [array, setArray] = useState([]);
    const [index, setIndex] = useState(0)
    
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
    return loading ? <><i className="fa-solid fa-spinner fa-spin"></i></> : (
        <section className="movies">
            <span className="movies__heading">
                <button onClick={() => {randomNumber(data.movies.length - 1, data.movies.length - 1); setToggle(value => !value)}} className="movies__heading--button">
                    {data.global.click}
                    <i className="fa-solid fa-arrow-down fa-bounce movies__heading--button-icon"></i>
                </button>
            </span>
            {
                toggle ? 
                    <div className="movies__wrapper">
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