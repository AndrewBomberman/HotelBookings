import dotenv from "dotenv";
import server from "./config/api/server.js";
import Database from "./config/db.js";

dotenv.config();

const port = process.env.PORT || 6000;

server.listen(port, async()=>{
    console.log("listening on port " + port);
    await Database.connect();
})