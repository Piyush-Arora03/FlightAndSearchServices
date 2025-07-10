const {airport_service : AirportService}=require("../services/index");

const airportService=new AirportService();

const create = async(req,res)=>{
    try {
        const result=await airportService.create(req.body);
        return res.status(201).json({
            data:result,
            success:true,
            err:{},
            message:"airport created successfully"
        });
    } catch (error) {
        console.log("something went wrong in airport controller");
        return res.status(500).json({
            data:{},
            success:false,
            err:{error},
            message:"cannot create airport"
        });
    }
}

module.exports={
    create
}