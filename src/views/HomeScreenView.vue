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
@import url(https://fonts.bunny.net/css?family=akaya-kanadaka:400);
* {
  --primary-color: #f1e0dd;
  --primary-background-color: #88b7c6;
  --secondary-background-color: #589bac;
}
template,
body {
  font-family: 'Akaya Kanadaka', display;
  background-color: var(--primary-background-color);
  color: var(--primary-color);
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
  background-color: var(--secondary-background-color);
}
</style>
