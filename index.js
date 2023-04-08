const express = require("express");
const cors = require("cors");
require('dotenv').config()
const PORT = process.env.PORT || 8080;
const testRoutes = require("./routes/testRoutes")
const db = require("./config/database");

const app = express();

//yogita tesing
// i love you atulll......
app.use(cors());
app.use(express.json());

app.use("/api", testRoutes)
async function dbconn(){
    try {
        let dbConn = await db.sequelize.sync();
        // console.log("dbConn ==>", dbConn);
        if(dbConn){
            console.log("db connected")
        }
    } catch (err) {
        console.log("Failed to sync db: ",err, err.message);
    }
}

dbconn();




app.listen(PORT,() => {
    console.log(`server is listening on port ${PORT}`)
})

