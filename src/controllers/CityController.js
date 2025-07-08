const { city_service:CityService } = require(`../services/index`);

const cityService = new CityService();

const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: `city created successfuly with name ${city.name}`,
            err: {}
        });
    } catch (error) {
        console.log("Something went wrong at Controller level");
        return res.status(500).json({
            data: {},
            success: false,
            message: `unable to create city`,
            err: error
        });
    }
}

const update = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.body, req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: `successfully updated city`,
            err: {}
        });
    } catch (error) {
        console.log("Something went wrong at Controller level");
        return res.status(500).json({
            data: {},
            success: false,
            message: `unable to update city`,
            err: error
        });
    }
}

const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: `successfully deleted city`,
            err: {}
        });
    } catch (error) {
        console.log("Something went wrong at Controller level");
        return res.status(500).json({
            data: {},
            success: false,
            message: `unable to delete city`,
            err: error
        });
    }
}

const get = async (req, res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: city,
            success: true,
            message: `successfully fetched city`,
            err: {}
        });
    } catch (error) {
        console.log("Something went wrong at Controller level");
        return res.status(500).json({
            data: {},
            success: false,
            message: `unable to fetch city`,
            err: error
        });
    }
}

module.exports = {
    create,
    update,
    destroy,
    get
}