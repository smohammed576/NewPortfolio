function LoadingAbout(){
    return(
        <section id="about" className="about">
            <figure className="loadingAbout__title"></figure>
            
            <div className="loadingAbout__info">
                {
                    Array.from({length: 8}, (_,index) => 
                        <figure className="loadingProject__info--text" key={index}></figure>
                    )
                }
            </div>
        </section>
    )
}

export default LoadingAbout;