const express=require("express");

const { PORT }=require("./config/ServerConfig");

const setUpAndStartServer= async() =>{
    const PORT=3000;
    // 1-> create a esxpress object
    const app=express();

    app.listen(PORT,()=> {
        console.log(`server started at ${PORT}`);
    });
}
setUpAndStartServer();