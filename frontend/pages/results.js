
const Results = ({props}) => {
    console.log(props);

    return(
        <div className="Results">
            <div className="row">
                {props.map(hotel=>{
                    return(         
                        <div className="col-lg-8">  
                            <div class="card" key={hotel._id._id}>
                                <div class="card-body">
                                    <h5 class="card-title">{hotel._id.name}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
Results.getInitialProps = async ({query}) => {
    let request = 'http://localhost:8000/api/results?'
    for (const [key, value] of Object.entries(query)) { // Creates the front-end query
        if(value){
          request+=key+'='+value+'&'
        }
    }
    const res = await fetch(request)
    const data = await res.json()
    return {
        props:data
    }
}

export default Results;