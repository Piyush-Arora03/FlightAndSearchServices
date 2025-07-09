const { Airplane }=require(`../models/index`);

class AirplaneRepository{
    async getAirplne(id){
        try {
            const airplane=await Airplane.findByPk(id);
            return airplane;   
        } catch (error) {
            console.log(`something went wrong in repo Airplane Repo ${error}`);
            throw {error};
        }
    }
}
module.exports=AirplaneRepository;