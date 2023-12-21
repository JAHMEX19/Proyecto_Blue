
//Simulate DB
const measurments = [
    {id:1, identificador :'B01',variable :'Temp',valor:58},
    {id:2, identificador :'B02',variable :'Hall',valor:50},
    {id:3, identificador :'B03',variable :'Current',valor:5}
];


//Funciones para trabajar en cada ruta definida
 const getAllMeasurments = (req,res)=>{
    res.render("index.pug",{title:"Lista de mediciones", measurments});

 }

 const getAddDevice = (req,res)=>{


 }


 const addMeasurment = (req,res)=>{


 }

 const getEditDevice = (req,res)=>{


 }

  const deleteMeasurments =(req,res)=>{

 }

 export default{
        getAllMeasurments,
        getAddDevice,
        addMeasurment,
        getEditDevice,
        deleteMeasurments,
 }