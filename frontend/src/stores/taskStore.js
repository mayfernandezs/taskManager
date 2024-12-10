import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [],
  }),

  getters: {
    completedTasks(state) {
      return state.tasks.filter(task => task.completed);
    },
    pendingTasks(state) {
      return state.tasks.filter(task => !task.completed);
    },
  },

  actions: {
    // Obtener todas las tareas del backend
    async fetchTasks(filter = '') {
      const response = await fetch(`http://localhost:3000/tasks?filter=${filter}`);
      const tasks = await response.json();
      this.tasks = tasks; // Actualiza el estado con las tareas del backend
    },

    // Agregar una nueva tarea al backend
    async addTask(name) {
      const response = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      });
      const newTask = await response.json();
      this.tasks.push(newTask); // Agregar la tarea al estado
    },

    // Cambiar el estado de completado de una tarea en el backend
    async toggleTaskStatus(id) {
      const task = this.tasks.find(task => task._id === id);
      if (task) {
        const updatedTask = { ...task, completed: !task.completed };

        await fetch(`http://localhost:3000/tasks/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedTask),
        });

        // Actualizar el estado local con el cambio de estado
        task.completed = !task.completed;
      }
    },

    // Eliminar una tarea del backend
    async deleteTask(id) {
      await fetch(`http://localhost:3000/tasks/${id}`, { method: 'DELETE' });
      this.tasks = this.tasks.filter(task => task._id !== id); // Eliminar la tarea del estado
    },
  },
});
