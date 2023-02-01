const express = require("express");
const app = express();
require("dotenv").config();


app.set("view engine", "ejs")

app.use(express.static("public"))

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req,res)=>{
    try{
        res.render("index");
    }catch(err){
        console.error(err);
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Application running on port ${process.env.PORT || PORT}.`)
})