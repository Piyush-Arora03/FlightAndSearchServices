const express=require("express");
const CityRepo=require("./repository/City_Repo");
const { PORT }=require("./config/ServerConfig");
const bodyParser = require("body-parser");
const ApiRoutes=require(`./routes/index`);
const {City,Airport}=require(`./models/index`);
// const sequelize=require(`sequelize`);


const setUpAndStartServer= async() => {
    const PORT=3000;
    // create a esxpress object
    const app=express();
    // create repo's obj to access its member function
    const cityObj=new CityRepo();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    //app.listen takes a callback() and port use async cause some task may be tie taking to give response 
    app.use('/api',ApiRoutes);
    app.listen(PORT,async ()=> {
        console.log(`server started at ${PORT}`);
        // db.sequelize.sync({alter:true});
    });
}
setUpAndStartServer();