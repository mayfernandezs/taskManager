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


export default {
  data() {
    return {
      currentFilter: 'all', // Estado del filtro actual (all, completed, pending)
    };
  },
  methods: {
    updateFilter(filter) {
      this.currentFilter = filter; // Actualiza el filtro actual
    },
  },
  components: {
    TaskList,
    TaskFilter,
  },
};
</script>
