<template>
  <h2 class="category-name">{{ category }}</h2>
  <div class="Question" v-for="question in Questions" :key="question.id">
    <router-link
      :to="{ name: 'question', query: { id: question.id, category: category } }"
      custom
      v-slot="{ navigate }"
    >
      <v-btn @click="navigate" block rounded="xl" size="x-large" height="6rem">{{
        question.value
      }}</v-btn>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    category: String,
    Questions: Array
  }
}
</script>

<style scoped>
.category-name {
  text-align: center;
}
.Question {
  margin: 1rem;
}
</style>
