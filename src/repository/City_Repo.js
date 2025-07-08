const { City }=require(`../models/index`);
const { Op }=require(`sequelize`);

class CityRepository{

    async createCity({name}){
        try {  
            const city= await City.create({
                name
            });
            return city;
        } catch (error) {
            console.log(`Some error occured at repository level ${error}`);
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
            console.log(`Some error occured at repository level ${error}`);
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
            console.log(`Some error occured at repository level ${error}`);
            throw {error};
        }
    }

    async getCity(cityId){
        try {
            const city=await City.findByPk(cityId);
            if (!city) {
                throw new Error("City not found");
            }
            return city;
        } catch (error) {
            console.log(`Some error occured at repository level ${error}`);
            throw {error};
        }
    }

    async getAllCities(filter){
        try {
            if(filter.name){
                const cities=await City.findAll({
                    where:{
                        name:{
                            [Op.startsWith] : filter.name
                        }
                    }
                });
                return cities;
            }
            const cities=await City.findAll();
            return cities;
        } catch (error) {
            console.log(`Some error occured at repository level ${error}`);
            throw {error};
        }
    }
};
module.exports=CityRepository;