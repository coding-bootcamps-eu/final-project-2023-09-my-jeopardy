<template>
  <body class="body">
    <h1>My Jeopardy</h1>
    <div class="btn-container">
      <v-btn to="/quizsetup" rounded="xl" size="x-large" height="72" class="btn">Play Quiz</v-btn>
      <v-btn to="/quizdata" class="btn" size="small" rounded="xl">Quiz Data</v-btn>
    </div>
  </body>
</template>

<script>
export default {
  components: {}
}
</script>

<style scoped>
template,
body {
  height: 100%;
  display: flex;
  flex-direction: column;
}
h1 {
  margin-top: 2rem;
  text-align: center;
  font-size: 9rem;
}
.btn-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  margin: auto;
  text-align: center;
  width: 30%;
}
.btn {
  margin: 3rem;
  background-color: var(--secondary-background-color);
}
</style>
