const {flight_service}=require("../services/index");

const flightService=new flight_service();

const create=async(req,res)=>{
    try {
        const flight=await flightService.createFlight(req.body);
        return res.status(201).json({
            data:flight,
            success:true,
            message:"Flight created successfuly",
            err:{}
        });      
    } catch (error) {
        console.log(`Something went wrong at controller level ${error}`);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Flight can not be created due to some error",
            err:{error}
        });  
    }
}

const get=async(req,res)=>{
    try {
        const flight=await flightService.getAllFlights(req.query);
        return res.status(200).json({
            data:flight,
            success:true,
            message:"Flight fetched successfuly",
            err:{}
        });
    } catch (error) {
        console.log(`Something went wrong at controller level ${error}`);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Flight can not be fetched due to some error",
            err:{error}
        });  
    }
}

const getById=async(req,res)=>{
    try {
        const flight=await flightService.getFlightById(req.params.id);
        return res.status(200).json({
            data:flight,
            success:true,
            message:"Flight fetched successfuly",
            err:{}
        });
    } catch (error) {
        console.log(`Something went wrong at controller level ${error}`);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Flight can not be fetched due to some error",
            err:{error}
        });  
    }
}

const update=async(req,res)=>{
    try {
        const flight=await flightService.updateFlight(req.params.id,req.body);
        return res.status(200).json({
            data:flight,
            success:true,
            message:"Flight updated successfuly",
            err:{}
        });
    } catch (error) {
        console.log(`Something went wrong at controller level ${error}`);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Flight can not be updated due to some error",
            err:{error}
        });  
    }
}
module.exports={
    create,
    get,
    getById,
    update
}