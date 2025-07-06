const { City }=require(`../models/index`);

class CityRepository{

    async createTable({name}) {
        try {
            const responce=await City.create({name});
            return responce;
        } catch (error) {
            throw {error};
        }
    }
    async deleteTable(cityId){
        try {
            await City.destroy({
                where:{
                    id:cityId
                }
            });
        } catch (error) {
            throw {error}
        }
    }
};
module.exports=CityRepository;