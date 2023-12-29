import Measurements from "../../services/measurements/measurments-service.js";

const measurementsObject = new Measurements();

const getMeasurements = (req,res)=>{

    try {
			const measurments = measurementsObject.getMeasurements();
			res.status(200).json(measurments);
		} catch (error) {
            res.status(500).json({message:error});
        }

   
};

const createMeasurement = (req, res) => {
    
	try {
		const newMeasurement = req.body;
		measurementsObject.createMeasurement(newMeasurement);
		res.status(200).json({ message: "OK", data: newMeasurement });
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

const deleteMeasurement = (req,res)=>{
    try {
        const idToDelete = req.params.id;
        measurementsObject.deleteMeasurement(idToDelete);
        res.status(200).json({ message: "Eliminado", id: idToDelete });
    } catch (error) {
        res.status(500).json({ message: error });
    }


};

export {
    getMeasurements,
    createMeasurement,
    deleteMeasurement
}