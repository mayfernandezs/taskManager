<!-- Componente de filtrado de tareas --> 
<template>
  <div>
    <h2>Filter Tasks</h2>
    <button class="filter" @click="applyFilter('all')">All</button> 
    <button class="filter" @click="applyFilter('completed')">Completed</button>
    <button class="filter" @click="applyFilter('pending')">Pending</button>
  </div>
</template>

<script>
export default {
  methods: {
    // Emitir el filtro seleccionado al componente padre
    applyFilter(filter) {
      this.$emit('filter-change', filter);
    },
  },
};
</script>
