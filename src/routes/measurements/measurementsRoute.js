
import express from 'express';
import { getMeasurements,createMeasurement,deleteMeasurement,addMedicion } from '../../controllers/measurements/measurementsController.js';


const measurementsRouter = express.Router();


measurementsRouter.get('/',getMeasurements);
measurementsRouter.post('/add',createMeasurement);
measurementsRouter.delete ('/delete/:id',deleteMeasurement);
measurementsRouter.get('/agregar/:id-:identificador-:dispositivo-:sensor-:valor',addMedicion);

export default measurementsRouter;