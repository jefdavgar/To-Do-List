const express = require("express");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const cors = require("cors");
const port = 3030;
const app = express();

// Importar rutas Todo
const todoRoutes = require("./routes/todoRoutes");

// Opciones de conexión a MongoDB
const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true };
// Usar JSON para parsear el cuerpo de la solicitud
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://admin:1018@cluster0.kxt35nb.mongodb.net/todolist",
    connectionOptions
  )
  .then(() => console.log("Connected successfully"))
  .catch((err) => console.error(err));
app.use("/todos", todoRoutes);
app.listen(port, () => {
  console.log("This server is listening on port: " + port);
});
