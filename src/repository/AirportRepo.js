const CurdRepository = require(`./CurdRepo`);

const { Airport } = require("../models/index");
class AirportRepository extends CurdRepository {
    constructor() {
        super(Airport);
    }
}
module.exports = AirportRepository;