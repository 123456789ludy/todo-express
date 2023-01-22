// importamos express
const express = require ('todo expressludy');
// crear una instancia de express
const app = express();
const PORT = 8000;
app.get('/',(req,res)=>{
    res.status(200).json({message: "bien venido al servidor" });

});
app.listen(PORT, () => {
    console.log('servidor corriendo en el puerto ${PORT}');
});