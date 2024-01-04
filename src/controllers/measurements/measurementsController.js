import Measurements from "../../services/measurements/measurements-service.js";

const measurementsObject = new Measurements();

const getMeasurements = (req, res) => {
	//
	try {
		const measurements = measurementsObject.getMeasurements();
		//res.status(200).json(measurements);
		res.render("measurements.pug",{title:"Mediciones", measurements});
        
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

const createMeasurement = (req, res) => {
	try {
		const newMeasurement = req.body;
		measurementsObject.createMeasurement(newMeasurement);
		res.status(200).json({ message: "Data Entry Ok", data: newMeasurement });
		//res.redirect("/");
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

const deleteMeasurement = (req, res) => {
	try {
		const idToDelete = req.params.id;
		measurementsObject.deleteMeasurement(idToDelete);
		res.status(200).json({ message: "Data deleted", id: idToDelete });
		//res.redirect("/");
	} catch (error) {
		res.status(500).json({ message: error });
	}
};


const addMedicion = (req,res)=>{

	let id = req.params.id;
	console.log(id);
	//let newMedicion = {id,identificador,dispositivo,sensor,valor};
	measurementsObject.addRegistro(id);
	//res.status(200).json({ message: "Data Entry Ok" });
	res.redirect("/measurements");

}

export {
    getMeasurements,
    createMeasurement,
    deleteMeasurement,
	addMedicion
}