const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 3000; 

app.use(bodyParser.json());
app.use(cors());



const cancionesRouter = require("./routes/canciones");
app.use("/canciones", cancionesRouter);
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
