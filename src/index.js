const express=require("express");
const CityRepo=require("./repository/City_Repo");
const { PORT }=require("./config/ServerConfig");
const bodyParser = require("body-parser");

const setUpAndStartServer= async() => {
    const PORT=3000;
    // 1-> create a esxpress object
    const app=express();
    const cityObj=new CityRepo();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT,async ()=> {
        console.log(`server started at ${PORT}`);
        
        const res=await cityObj.createTable({name:"Faizabad"});
        console.log(res);
    });
}
setUpAndStartServer();