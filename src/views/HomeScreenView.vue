<template>
  <body>
    <h1>My Jeopardy</h1>
    <div class="btn-container">
      <routeButton
        description="Play Quiz"
        to="/quizsetup"
        rounded="xl"
        size="x-large"
        variant="outlined"
        height="72"
        class="btn"
      />
      <v-btn class="btn">Create Quiz</v-btn>
    </div>
  </body>
</template>
<script>
import routeButton from '@/components/routeButton.vue'
export default {
  components: {
    routeButton
  }
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
  text-decoration: none;
  color: inherit;
}
</style>
