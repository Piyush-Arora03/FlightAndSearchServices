const express = require(`express`);
const CityController = require(`../../controllers/CityController`);
const FlightController = require(`../../controllers/FlightController`);
const AirportController = require(`../../controllers/AirportController`);
const FlightMiddleware = require(`../../middleware/FlightMiddleware`);

const router = express.Router();

router.post('/airport', AirportController.create);

router.post('/flight', FlightMiddleware.validationCreateFlight, FlightController.create);
router.get('/flight', FlightController.get);
router.get('/flight/:id', FlightController.getById);
router.patch('/flight/:id', FlightController.update);

router.post('/city', CityController.create);
router.get('/city/:id', CityController.get);
router.delete('/city/:id', CityController.destroy);
router.patch('/city/:id', CityController.update);
router.get('/city', CityController.getAll);

module.exports = router;