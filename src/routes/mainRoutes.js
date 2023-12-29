import measurementsRouter from "./measurements/measurementsRoute.js";


const routerApi =(app)=>{
app.use('/',measurementsRouter)
}

export default routerApi;