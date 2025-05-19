function LoadingProjects(){
    return(
        <section className="projects">
            {
                Array.from({length: 12}, (_,index) => 
                    <div className="projects__item" key={index}>
                        <figure className="loadingProjects__item--figure"></figure>
                        <article className="loadingProjects__item--wrapper">
                            <figure className="loadingProjects__item--text"></figure>
                        </article>
                    </div>
                )
            }
        </section>
        // // <main className="main">
        //     {/* <span className="filters">
        //             <span className="filters__buttons">
        //                 <button className="filters__buttons--filter">
        //                     <i className="fa-solid fa-caret-down filters__buttons--filter-icon"></i>
        //                     Filter
        //                 </button>
        //             </span>
        //         </span> */}
        // // </main>
    );
}

export default LoadingProjects;