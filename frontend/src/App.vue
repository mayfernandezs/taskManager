<template>
  <div id="app">
    <h1>Task Manager</h1>
    <!-- El evento @filter-change actualiza el filtro actual -->
    <TaskFilter @filter-change="updateFilter" />
    <!-- Pasar el filtro actual como prop -->
    <TaskList :filter="currentFilter" />
  </div>
</template>

<script>
import TaskList from './components/TaskList.vue';
import TaskFilter from './components/TaskFilter.vue';
import { useTaskStore } from './stores/taskStore'; // Importa el store

export default {
  data() {
    return {
      currentFilter: 'all', // Estado del filtro actual (all, completed, pending)
    };
  },
  methods: {
    updateFilter(filter) {
      this.currentFilter = filter; // Actualiza el filtro actual
      const store = useTaskStore();
      store.fetchTasks(filter); // Actualiza las tareas filtradas en el store
    },
  },
  components: {
    TaskList,
    TaskFilter,
  },
  mounted() {
    // Al cargar la aplicación, obtener todas las tareas por defecto
    const store = useTaskStore();
    store.fetchTasks(); 
  },
};
</script>
