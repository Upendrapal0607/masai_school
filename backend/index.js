const express = require("express");
const { connection } = require("./src/db/db");
const { SkillsRoute } = require("./src/routes/skills.route");
const { DeveloperRoute } = require("./src/routes/developer.route");
require("dotenv").config()
const port = process.env.PORT || 8080
const app = express();
app.use(express.json());

app.use('/skills',SkillsRoute)
app.use('/developer',DeveloperRoute)
app.get("/",async(req,res)=>{
    res.status(200).json({message:"welcome to my backend server"})
})
app.listen(port,async()=>{
    console.log(`server is running on port ${port}`);
    try {
        await connection
        console.log("connected to the database");
    } catch (error) {
        console.log({error});
    }
})

