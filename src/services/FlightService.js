const { flight_repository, airplane_repository } = require("../repository/index");
const { timeCompare } = require("../utils/helper");
class FlightService {
    constructor() {
        this.airplaneRepository = new airplane_repository();
        this.flightRepository = new flight_repository();
    }
    async createFlight(data) {
        try {
            if (!timeCompare(data.departureTime, data.arrivalTime)) {
                throw { error: 'arrival time can not be less than departure time' }
            }
            const airplane = await this.airplaneRepository.getAirplne(data.airplaneid);
            console.log(airplane);
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats: airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log(`Some error occured at service level ${error}`);
            throw { error };
        }
    }

    async getAllFlights(filter) {
        try {
            const flight = this.flightRepository.getFlight(filter);
            return flight;
        } catch (error) {
            console.log(`Some error occured at service level ${error}`);
            throw { error };
        }
    }
    async getFlightById(flightId) {
        try {
            const flight = this.flightRepository.getFlightById(flightId);
            return flight;
        } catch (error) {
            console.log(`Some error occured at service level ${error}`);
            throw { error };
        }
    }
   
    async updateFlight(flightId,data) {
        try {
            const flight = this.flightRepository.updateFlight(flightId,data);
            return flight;
        } catch (error) {
            console.log(`Some error occured at service level ${error}`);
            throw { error };
        }
    }
}
module.exports = FlightService;