import measurementsRouter from "./measurements/measurementsRoute.js";


const routerApi =(app)=>{


    app.use('/mediciones',measurementsRouter);

    app.use('/',(req,res)=>{
        res.render("index.pug",{title:"Proyecto"})


    });


}


export default routerApi;