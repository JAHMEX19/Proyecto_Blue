//Simulate DB con clases
class Measurements {
	constructor() {
		this.masurments = [];
		this.generateData();
	}

	generateData() {
		this.measurements = [
			{
				id: 1,
				identificador: "B01",
				dispositivo: "arduino uno",
				sensor: "Temp",
				valor: 58,
			},
			{
				id: 2,
				identificador: "B02",
				dispositivo: "arduino uno",
				sensor: "Hall",
				valor: 50,
			},
		];
	}

	//Logica de programación desde el modelo
	getMeasurements() {
		return this.measurements;
	}
	createMeasurement(newMeasurement) {
		this.measurements.push(newMeasurement);
	}

	deleteMeasurement(idToDelete) {
		const position = this.measurements.findIndex(element => element.id === parseInt(idToDelete));
	    this.measurements.splice(position, 1);
	
	}
}
export default Measurements;
