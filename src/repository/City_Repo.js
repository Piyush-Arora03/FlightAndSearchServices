const { City }=require(`../models/index`);

class CityRepository{

    async createCity({name}){
        try {  
            const city= await City.create({\
                name
            });
            return city;
        } catch (error) {
            console.log("Some error occured at repository level");
            throw {error};
        }
    }

    async deleteCity(cityId){
        try {
            await City.destroy({
                where :{
                    id:cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Some error occured at repository level");
            throw {error};
        }
    }

    async updateCity(city,cityId){
        try {
            await City.update(city,{
                where:{
                    id:cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Some error occured at repository level");
            throw {error};
        }
    }

    async getCity(cityId){
        try {
            const city=await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Some error occured at repository level");
            throw {error};
        }
    }
};
module.exports=CityRepository;