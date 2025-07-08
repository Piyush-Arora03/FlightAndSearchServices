const express=require("express");
const CityRepo=require("./repository/City_Repo");
const { PORT }=require("./config/ServerConfig");
const bodyParser = require("body-parser");

const setUpAndStartServer= async() => {
    const PORT=3000;
    // create a esxpress object
    const app=express();
    // create repo's obj to access its member function
    const cityObj=new CityRepo();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    //app.listen takes a callback() and port use async cause some task may be tie taking to give response 
     
    app.listen(PORT,async ()=> {
        console.log(`server started at ${PORT}`);
        // pass the same " name: " other it will not match the attributes and save null value 
        const res=await cityObj.createTable({name:"Faizabad"});
        console.log(res);
    });
}
setUpAndStartServer();