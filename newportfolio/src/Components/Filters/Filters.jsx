import { useContext, useEffect, useState } from "react";
import DataContext from "../../hooks/context/DataContext";
import Loading from "../Loading/Loading";

function Filters(){
    const {data} = useContext(DataContext);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if(data.filters){
            setLoading(false);
        }
    }, [data]);

    function clickFilter(event){
        console.log(event);
    }

    return loading ? <Loading/> : (
        <aside className="filters">
            <h3 className="filters__title">Filters</h3>
            <ul className="filters__list">
                {
                    data.filters.map((item, index) => 
                        <li className="filters__item" key={index}>
                            <input type="checkbox" onChange={(event) => clickFilter(event.target)} defaultChecked className="filters__item--checkbox" />
                            <p className="filters__item--name">{item}</p>
                        </li>
                    )
                }
            </ul>
        </aside>
    )
}

export default Filters;