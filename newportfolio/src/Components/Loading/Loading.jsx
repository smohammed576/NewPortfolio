function Loading(){
    return(
        <section className="loading">
            {
                Array.from({length: 3}, (_,index) => 
                    <figure className="loading__item" key={index}></figure>
                )
            }
        </section>
    );
}

export default Loading;