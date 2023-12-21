
//Simulate DB
let measurments = [
    {id:1, identificador :'B01',dispositivo:'arduino uno',sensor :'Temp',valor:58},
    {id:2, identificador :'B02',dispositivo:'arduino uno',sensor :'Hall',valor:50},
    {id:3, identificador :'B03',dispositivo:'arduino uno',sensor :'Current',valor:5}
];


//Funciones para trabajar en cada ruta definida
 const getAllMeasurments = (req,res)=>{
    res.render("index.pug",{title:"Lista de mediciones", measurments});

 }

 const addMeasurment = (req,res)=>{
   
    let{id,identificador,dispositivo,sensor,valor} = req.params;
    console.log(req.params);
    id=measurments.length+1;
    measurments.push({id,identificador,dispositivo,sensor,valor});
    res.redirect("/");
    
 }

  const deleteMeasurments =(req,res)=>{

    let id = parseInt(req.params.id);
    console.log(id);
    
    measurments= measurments.filter((el)=>el.id !== id);
     /*
    const position=measurments.findIndex (el => el.id===id);
    measurments.slice(position,1);*/
    res.redirect("/");
 }

 export default{
        getAllMeasurments,
        addMeasurment,
        deleteMeasurments,
 }