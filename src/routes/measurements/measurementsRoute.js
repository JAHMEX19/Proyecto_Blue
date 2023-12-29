
import express from 'express';
import { getMeasurements,createMeasurement,deleteMeasurement } from '../../controllers/measurements/measurementsController.js';


const measurementsRouter = express.Router();


measurementsRouter.get('/',getMeasurements);
measurementsRouter.post('/register',createMeasurement);
measurementsRouter.delete ('/delete/:id',deleteMeasurement);

export default measurementsRouter;