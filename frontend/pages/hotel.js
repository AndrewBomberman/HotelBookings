const Hotel = ({props}) =>{
    console.log(props)

    return(
        <div className="Hotel">
            {props._id}
        </div>
    )
}
Hotel.getInitialProps = async ({query}) => {
    console.log(query);
    let request = 'http://localhost:8000/api/hotel?'
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
export default Hotel