const { city_repository:CityRepository } = require(`../repository/index`);

class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity(data) {
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Some error occured at service level");
            throw { error };
        }
    }

    async deleteCity(cityId) {
        try {
            await this.cityRepository.deleteCity(cityId);
            return true;
        } catch (error) {
            console.log("Some error occured at service level");
            throw { error };
        }
    }

    async updateCity(data, cityId) {
        try {
            await this.cityRepository.updateCity(data, cityId);
            return true;
        } catch (error) {
            console.log("Some error occured at service level");
            throw { error };
        }
    }

    async getCity(cityId) {
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Some error occured at service level");
            throw { error };
        }
    }

    async getAllCities(filter){
        try {
            const cities=await this.cityRepository.getAllCities(filter);
            return cities;
        } catch (error) {
            console.log("Some error occured at service level");
            throw { error };
        }
    }
}
module.exports=CityService;