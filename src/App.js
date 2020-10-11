const express= require('express');
const app=express();

app.set('port', process.env.PORT||3001);

app.use(express.json());
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


const categotiarouter= require('./routes/CategoriaRouter');
const productorouter= require('./routes/ProductoRouter');
//route
app.use('/categoria', categotiarouter)
app.use('/producto', productorouter)


app.use('/', (req,res)=> {
    res.send("jhoas");
});
 



app.listen(app.get('port'),()=>{
    console.log("iniciando servidor");
})