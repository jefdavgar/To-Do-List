const express = require("express"); // importamos express
const router = express.Router(); // creamos una instancia del enrutador de express
const Todo = require("../models/Todo"); // importamos el modelo Todo

// Manejador de petición GET en la ruta raíz ('/')
router.get("/", (req, res) => {
  Todo.find((err, result) => { // buscamos todos los documentos de la colección Todo
    if(err) throw new Error(err); // si hay un error, lo lanzamos
    res.json(result); // enviamos la respuesta en formato JSON con los resultados
  });
});

// Manejador de petición POST en la ruta raíz ('/')
router.post("/", (req, res) => {
  Todo.create(req.body, (err, result) => { // creamos un nuevo documento en la colección Todo con los datos en el cuerpo de la petición
    if(err) throw new Error(err); // si hay un error, lo lanzamos
    res.json(result); // enviamos la respuesta en formato JSON con el documento creado
  });
});

// Manejador de petición PUT en la ruta con un parámetro ('/:id')
router.put("/:id", (req, res) => {
  Todo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, result) => { // buscamos el documento en la colección Todo con el id especificado y lo actualizamos con los datos en el cuerpo de la petición
    if(err) throw new Error(err); // si hay un error, lo lanzamos
    res.json(result); // enviamos la respuesta en formato JSON con el documento actualizado
  });
});

// Manejador de petición DELETE en la ruta con un parámetro ('/:id')
router.delete("/:id", (req, res) => {
  Todo.findOneAndRemove({ _id: req.params.id }, (err, result) => { // buscamos el documento en la colección Todo con el id especificado y lo eliminamos
    if(err) throw new Error(err); // si hay un error, lo lanzamos
    res.end(); // enviamos una respuesta vacía
  });
});

module.exports = router; // exportamos el enrutador para ser utilizado en otro archivo
