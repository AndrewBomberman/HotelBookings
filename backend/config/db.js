import mongodb from "mongodb";

export default class Database{
    static async connect() {
        try {
            const client =  await mongodb.MongoClient.connect(process.env.DATABASE_URL);
            const db = client.db(process.env.DATABASE_NAME);
            this.collection = db.collection(process.env.DATABASE_COLLECTION);
            console.log("Database Connected");
        } catch (error) {
            console.log(error)
        }
        
         
        
    }
    static async results(filters){
        console.log(filters);
        return await this.collection.aggregate([
            { 
                $match: filters
                
            },
            {
                $group:{ 
                    _id:{
                        _id:"$_id",
                        name:"$name",
                        image:"$images.thumbnail", 
                        price:"$price",
                        rating:"$review_scores.review_scores_value",
                        property_type:"$property_type",
                        city:"$address.market",
                    }
                }
            },
        ]).limit(20).toArray();
    }
    static async hotel(filters){
        return this.collection.findOne({_id:filters._id});
    }
}