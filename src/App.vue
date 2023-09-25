<template>
  <div id="app">
    <EditableGrid />
  </div>
</template>

<script>
import EditableGrid from './components/EditableGrid.vue'

export default {
  name: 'App',
  components: {
    EditableGrid
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
