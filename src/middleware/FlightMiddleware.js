const validationCreateFlight=(req,res,next)=>{
    if(
        !req.body.flightNumber ||
        !req.body.airplaneid ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.departureTime ||
        !req.body.arrivalTime ||
        !req.body.price
    ){
        return res.status(400).json({
            data:{},
            success:false,
            message:"invalid request body",
            err:"some mandatory information is missing"
        });
    }
    next();
}

module.exports={
    validationCreateFlight
}