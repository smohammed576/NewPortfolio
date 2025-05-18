import Header from "../Header/Header";
import LoadingProject from "./pages/LoadingProject";
import LoadingProjects from "./pages/LoadingProjects";

function Loading(props){
    return(
        // <section className="loading">
        //     {
        //         Array.from({length: 3}, (_,index) => 
        //             <figure className="loading__item" key={index}>a</figure>
        //         )
        //     }
        // </section>
        <>
            <Header/>
            {
                props.page === "projects" && <LoadingProjects/> || props.page === "project" && <LoadingProject/>
            }
        </>
    );
}

export default Loading;