import Database from "../config/db.js"
export default class PagesController {
    
    static async results(req,res,next) {
        res.status(200).json(await Database.results(req.query));
    }
    static async hotel(req,res,next) {
        res.status(200).json(await Database.hotel(req.query));
    }
}