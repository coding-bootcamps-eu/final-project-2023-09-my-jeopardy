<template>
  <body>
    <h1>My Jeopardy</h1>
    <div class="btn-container">
      <router-link to="/quizsetup" custom v-slot="{ navigate }">
        <v-btn
          @click="navigate"
          class="btn"
          rounded="xl"
          size="x-large"
          variant="outlined"
          height="72"
          >Play Quiz</v-btn
        >
      </router-link>
      <v-btn>Create Quiz</v-btn>
    </div>
  </body>
</template>

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
  margin-bottom: 2rem;
  text-decoration: none;
  color: inherit;
}
</style>
