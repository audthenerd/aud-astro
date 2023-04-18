<style scoped>
main {
  background-color: rgb(250,244,237);
  height: 100vh;
}
</style>

<template>
  <main>
    <div class="billboard">
      <h1 class="header">My Chart</h1>
    </div>
    <div class="chart-area">
        <div class="sun"></div>
        <div class="moon"></div>
        <div class="mercury"></div>
        <div class="venus"></div>
        <div class="jupiter"></div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ChartPage'
}
</script>
