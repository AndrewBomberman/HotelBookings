import mongodb from "mongodb";

export default class Database{
    static async connect() {
        const client =  await mongodb.MongoClient.connect(process.env.DATABASE_URL);
        const db = client.db(process.env.DATABASE_NAME);
        this.collection = db.collection(process.env.DATABASE_COLLECTION);
        console.log("Database connected");  
        
    }
    static async results(filters){
        console.log(filters);
        return this.collection.aggregate([
            { 
                $match: filters
            },
            {
                $group:{ 
                    _id:{
                        _id:"$_id",
                        name:"$name",
                        images:"$images.picture_url", 
                        price:"$price",
                        rating:"$review_scores.review_scores_value",
                        address:"$address.market"
                    }
                }
            },
        ]).limit(20).toArray();
    }
    static async getHotelPageData(filters){
        return this.collection.findOne(filters)
    }
}