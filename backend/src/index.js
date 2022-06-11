import express from "express"
import "dotenv/config";
import database from "./config/database";
import Router from "./routes/route";
import cors from "cors";
const app = express();
database 
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully!!")
    })
    .catch((e) => console.error("Unable to connect the database:",e))

database
    .sync({alter: true})
    .then(() => {
        console.log("All tables are created successfully")
    })
    .catch((err) => console.error("Unable to create tables", err));
    
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cors());
app.use("/", Router);

app.listen(process.env.PORT || 3000,() =>{
    console.log(`Connected and listing ${process.env.PORT}`)
})