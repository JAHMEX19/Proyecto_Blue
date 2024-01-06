import express from 'express';
import cors from "cors"; 
import helmet from 'helmet';
import morgan from 'morgan';
const http= require("http");
//import taskController from "./src/controllers/taskController.js";
import path  from 'path';
//import errorController from './src/controllers/errors/errorController.js';
import { fileURLToPath } from 'url';
import routerApi from './src/routes/mainRoutes.js';

const __dirname = fileURLToPath(new URL(".",import.meta.url)); //Guarda la ruta del directorio
//Inicializamos nuestra app
const app= express(); //Crea un servidor 
const port = 3000;

//Midleware
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

//Definicion de plantilla a usar (PUG)
app.set("views",path.join(__dirname,"/src/views"));
app.set("view engine","pug");

//Express uses
app.use(express.static(path.join(__dirname,"public")));//Unir ruta public 
app.use(express.json());//Habilita el uso de body JSON en nuestra aplicacion 
app.use(express.urlencoded({extended:false}));



// Rutas

routerApi(app);

//Get all Measurments 
//app.get('/', taskController.getAllMeasurments);


//Server 
app.listen(port,()=>{
    console.log(`La aplicación esta corriendo en el puerto http://localhost:${port}`);
})
