<template>
  <div>
    <h2>Filter Tasks</h2>

    <button @click="applyFilter('all')">All</button> 
    <button @click="applyFilter('completed')">Completed</button>
    <button @click="applyFilter('pending')">Pending</button>


  </div>
</template>

<script>
export default {
  methods: {
    applyFilter(filter) {
      this.$emit('filter-change', filter); // Emitir el filtro seleccionado al padre
    },
  },
};
</script>

