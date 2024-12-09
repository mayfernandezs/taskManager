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
    addTask(name) {
      this.tasks.push({
        id: Date.now(),
        name,
        completed: false,
      });
    },
    toggleTaskStatus(id) {
      const task = this.tasks.find(task => task.id === id);
      if (task) task.completed = !task.completed;
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    },
  },
});


