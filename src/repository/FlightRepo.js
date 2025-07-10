const { Flight } = require("../models/index");
const { Op, where } = require("sequelize");

class FlightRepository {
    #createFilter(data) {
        let filter = {};
        if (data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if (data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }
        let minmaxprice = [];
        console.log(data.minPrice);
        if (data.minPrice) {
            minmaxprice.push({ price: { [Op.gte]: data.minPrice } });
        }
        if (data.maxPrice) {
            minmaxprice.push({ price: { [Op.lte]: data.maxPrice } });
        }
        Object.assign(filter, { [Op.and]: minmaxprice });
        return filter;
    }
    async createFlight(data) {
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log(`something went wrong in Flight Repo ${error}`);
            throw { error };
        }
    }

    async getFlight(filter) {
        try {
            let filterObject = this.#createFilter(filter);
            const flight = await Flight.findAll({
                where: filterObject
            });
            return flight;
        } catch (error) {
            console.log(`something went wrong in Flight Repo ${error}`);
            throw { error };
        }
    }
}

module.exports = FlightRepository;