const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

// Configurar CORS
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/tasks', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.log('Error al conectar a MongoDB:', err));

// Definir el esquema y modelo de Task
const taskSchema = new mongoose.Schema({
  name: String,
  completed: { type: Boolean, default: false }
});

const Task = mongoose.model('Task', taskSchema);

// Rutas de la API

app.get('/tasks', async (req, res) => {
  const { filter } = req.query;  // 'filter' puede ser 'all', 'completed', o 'notCompleted'

  let query = {};  // Por defecto, muestra todas las tareas

  if (filter === 'completed') {
    query.completed = true;
  } else if (filter === 'notCompleted') {
    query.completed = false;
  }

  try {
    const tasks = await Task.find(query);
    res.json(tasks);
  } catch (err) {
    res.status(500).send({ message: 'Error al obtener tareas', error: err });
  }
});



app.post('/tasks', async (req, res) => {
  const newTask = new Task(req.body);
  await newTask.save();
  res.json(newTask);
});

app.put('/tasks/:id', async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
});

app.delete('/tasks/:id', async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  res.json(task);
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
