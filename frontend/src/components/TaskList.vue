<!-- Componente de lista de tareas --> 
<template>
  <div>
    <h2>Task List</h2>
    <!-- Campo de entrada para agregar tareas -->
    <div>
      <input v-model="newTask" placeholder="Enter a task" />
      <button @click="addNewTask">Add Task</button>
    </div>

    <!-- Lista de tareas filtradas -->
    <ul>
      <li v-for="task in filteredTasks" :key="task._id"> 
        <span :class="{ completed: task.completed }">{{ task.name }}</span>
        <button :class="{ pendingBtn: task.completed }" @click="toggleTask(task._id)"> 
          {{ task.completed ? 'Pend' : 'Complete' }}
        </button>
        <button class="deleteBtn" @click="deleteTask(task._id)">Delete</button> 
      </li>
    </ul>
  </div>
</template>

<script>
import { useTaskStore } from '../stores/taskStore';

export default {
  props: {
    filter: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      newTask: '',
    };
  },
  computed: {
    tasks() {
      const store = useTaskStore();
      return store.tasks;
    },
    filteredTasks() {
      // Filtrar tareas basado en el filtro recibido como prop
      if (this.filter === 'completed') {
        return this.tasks.filter(task => task.completed);
      } else if (this.filter === 'pending') {
        return this.tasks.filter(task => !task.completed);
      }
      return this.tasks; // Mostrar todas las tareas por defecto
    },
  },
  methods: {
    addNewTask() {
      const store = useTaskStore();
      if (this.newTask.trim()) {
        store.addTask(this.newTask);
        this.newTask = '';
      }
    },
    toggleTask(id) {
      const store = useTaskStore();
      store.toggleTaskStatus(id);
    },
    deleteTask(id) {
      const store = useTaskStore();
      store.deleteTask(id);
    },
  },
};
</script>

<style>
.completed {
  text-decoration: line-through;
  color: gray;
}
</style>
