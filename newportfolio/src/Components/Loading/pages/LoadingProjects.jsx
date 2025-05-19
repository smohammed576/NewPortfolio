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
    );
}

export default LoadingProjects;