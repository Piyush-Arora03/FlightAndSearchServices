const CurdService = require("./CurdService");

const {AirportRepository}=require("../repository/index");

class AirportService extends CurdService{
    constructor(){
        const airportRepository=new AirportRepository();
        super(airportRepository);
    }
}

module.exports=AirportService;