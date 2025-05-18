function LoadingWork(){
    return(
        <section id="projects" className="work">
            <figure className="loadingAbout__title"></figure>
            <div className="work__wrapper">
                <figure className="loadingWork__figure"></figure>
                <article className="work__info">
                    <figure className="loadingWork__info--text"></figure>
                    <figure className="loadingWork__info--year"></figure>
                    
                    <div className="loadingWork__info--figure">
                            {
                                Array.from({length: 5}, (_,index) => 
                                    <figure className="loadingWork__info--text" key={index}></figure>
                                )
                            }
                        </div>
                </article>
            </div>
        </section>
    )
}

export default LoadingWork;