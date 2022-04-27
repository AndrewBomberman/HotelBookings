import Database from "../config/db.js"
export default class PagesController {
    static{
        console.log("Controller")
    }
    
    static async results(req,res,next) {
        res.status(200).json(await Database.results(req.query));
    }
    static async hotel(req,res,next) {
        res.status(200).json(await Database.hotel(req.query));
    }
}