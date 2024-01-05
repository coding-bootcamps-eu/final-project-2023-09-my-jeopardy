<template>
  <h1 class="headline">My Jeopardy</h1>
  <div class="category-container">
    <div class="category" :key="category.id" v-for="category in this.groupStore.sortedGroups">
      <QuizCategory :category="category.title" />
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
import { usegroupStore } from '@/stores/groups.js'
import { useQuestionStore } from '@/stores/questions.js'

export default {
  components: {
    QuizCategory,
    PlayerStats
  },
  setup() {
    const questionStore = useQuestionStore()
    const groupStore = usegroupStore()
    return { groupStore, questionStore }
  },
  data() {
    return {
      apiUrl: this.$route.query.url
    }
  },
  created() {
    this.saveQuestions()
  },
  methods: {
    saveQuestions() {
      if (this.$route.query.url != undefined) {
        fetch(this.$route.query.url)
          .then((res) => res.json())
          .then((jsondata) => {
            this.questionStore.initQuestion(jsondata)
          })
      }
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
