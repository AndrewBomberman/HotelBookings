import { useRouter } from "next/router";
const Results = ({props}) => {
    const router = useRouter();
    const handleOnClick = (name,value) => {
        let inputData = {}
        inputData[name] = value
        console.log(router)
        router.push({
            pathname:"/hotel",
            query:inputData
        })

    }

    return(
        <div className="Results">
            <div className="row">
                {props.map(hotel=>{
                    return(         
                        <div className="col-lg-8" key={hotel._id._id}>  
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{hotel._id.name}</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <button className="btn btn-primary" name="_id" value= {hotel._id._id} onClick={(e)=>handleOnClick(e.target.name,e.target.value)}>Go somewhere</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
Results.getInitialProps = async ({query, headers}) => {
    console.log(headers)
    let request = 'http://localhost:8000/api/results?'
    for (const [key, value] of Object.entries(query)) { // Creates the front-end query
        if(value){
          request+=key+'='+value+'&'
        }
    }
    console.log(request);
    const res = await fetch(request)
    const data = await res.json()
    console.log(data);
    return {
        props:data
    }
}

export default Results;