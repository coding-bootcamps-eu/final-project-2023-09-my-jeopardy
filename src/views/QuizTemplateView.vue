<template>
  <h1 class="headline">My Jeopardy</h1>
  <div class="category-container">
    <div class="category" :key="category.id" v-for="(category, index) in Quiz.categorys">
      <QuizCategory :category="category.title" :Questions="getQuestions(index)" />
    </div>
  </div>
  <br />
  <div class="PlayerStats">
    <PlayerStats />
  </div>
  <v-btn to="/endscreen" size="small">Endscreen</v-btn>
</template>

<script>
import QuizCategory from '@/components/QuizCategories.vue'
import PlayerStats from '@/components/PlayerStats.vue'
import { useQuestionStore } from '@/stores/questions.js'
export default {
  components: {
    QuizCategory,
    PlayerStats
  },
  setup() {
    const questionStore = useQuestionStore()
    return { questionStore }
  },
  data() {
    return {}   
  },
  methods: {
    getQuestions(index) {
      return this.Quiz.questions.filter((Object) => {
        if (Object.groupId === this.Quiz.categorys[index].id) {
          return Object
        }
      })
    }
  }
}
</script>

<style scoped>
.headline {
  text-align: center;
  margin-top: 1rem;
}
.category-container {
  display: flex;
  width: 100%;
  justify-content: center;
}
.category {
  flex-grow: 1;
  margin: 1rem;
}
.PlayerStats {
  text-align: center;
}
</style>
