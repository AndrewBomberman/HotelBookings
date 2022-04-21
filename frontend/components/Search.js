import { useRouter } from "next/router";
const Search = () =>{
    let inputData = {}
    const router = useRouter();
    const handleOnChange = (key,value) => {
        // This function is triggered when a data is changed in the search form
        // Creates the query array
        if(key === "date"){
            value = new Date(value).toLocaleDateString('en-GB'); // Converts the date into local date
        }
        inputData[key] = value;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        router.push({
            pathname:"/results",
            query: inputData
        })
    }

    return(
        <div className="Search">
            <div className="card bg-success">
                <div className="card-header text-light text-center">Search</div>
                    <div className="card-body">
                        <form onSubmit={(e)=>handleSubmit(e)}>
                            <div className="card-text">
                                <select className="form-select" aria-label="Default select example" defaultValue = "Property Type" name="property_type" onChange={(e)=>handleOnChange(e.target.name,e.target.value)}>
                                    <option>Property Type</option>
                                    <option value="House">House</option>
                                    <option value="Apartament">Apartament</option>
                                    <option value="Guesthouse">Guesthouse</option>
                                    <option value="Condominium">Condominium</option>
                                    <option value="Loft">Loft</option>
                                </select>
                            </div>
                            <div className="card-text">
                                <select className="form-select" aria-label="Default select example" defaultValue = "City" name="address.market" onChange={(e)=>handleOnChange(e.target.name,e.target.value)}>
                                    <option>Select City</option>
                                    <option value="Montreal">Montreal</option>
                                    <option value="Sydney">Sydney</option>
                                    <option value="Porto">Porto</option>
                                    <option value="Maui">Maui</option>
                                    <option value="Istanbul">Istanbul</option>
                                    <option value="Rio De Janeiro">Rio De Janeiro</option>
                                    <option value="New York">New York</option>
                                    <option value="The Big Islandk">The Big Island</option>
                                </select>
                            </div>
                            <input type="submit" className="btn btn-dark"value ="Search" />
                        </form>
                    </div> 
            </div>
        </div>
    )
}

export default Search