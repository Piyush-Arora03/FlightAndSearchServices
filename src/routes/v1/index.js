const express=require(`express`);
const CityController= require(`../../controllers/CityController`); 
const FlightController=require(`../../controllers/FlightController`);

const router=express.Router();

router.post('/flight',FlightController.create);
router.get('/flight',FlightController.get);

router.post('/city',CityController.create);
router.get('/city/:id',CityController.get);
router.delete('/city/:id',CityController.destroy);
router.patch('/city/:id',CityController.update);
router.get('/city',CityController.getAll);

module.exports=router;