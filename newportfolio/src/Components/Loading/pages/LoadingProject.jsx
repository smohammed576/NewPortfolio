function LoadingProject(){
    return(
        <section className="project">
            <span className="project__return">
                <figure className="loadingProject__return"></figure>
            </span>
            <span className="project__wrapper">
                <figure className="project__figure loadingProject__figure">
                    
                </figure>
                <div className="project__info">
                    <article className="project__info--wrapper">
                        <span className="loadingProject__info--title">
                            <figure className="loadingProject__info--text"></figure>
                        </span>
                        <span className="loadingProject__info--year">
                            <figure className="loadingProject__info--text"></figure>
                        </span>
                        <div className="loadingProject__info--figure">
                            {
                                Array.from({length: 10}, (_,index) => 
                                    <figure className="loadingProject__info--text" key={index}></figure>
                                )
                            }
                        </div>
                    </article>
                </div>
            </span>
        </section>
    );
}

export default LoadingProject;