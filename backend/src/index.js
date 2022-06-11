import express from "express"
import "dotenv/config";
const app = express();

app.listen(process.env.PORT || 3000,() =>{
    console.log(`Connected and listing ${process.env.PORT}`)
})