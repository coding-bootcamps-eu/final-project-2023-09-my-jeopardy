<template>
  <body class="body">
    <h1 class="headline">My Jeopardy</h1>
    <div class="category-container">
      <div
        class="category"
        :key="category.id"
        v-for="category in this.groupStore.sortedGroups.slice(0, 5)"
      >
        <QuizCategory :category="category.title" />
      </div>
    </div>
    <br />
    <div class="PlayerStats">
      <PlayerStats />
    </div>
    <v-btn class="btn" @click="popup = true" size="small">Endscreen</v-btn>
    <ConfirmEndscreen v-if="popup" @ClosePopup="popup = false" />
  </body>
</template>

<script>
import QuizCategory from '@/components/QuizCategories.vue'
import ConfirmEndscreen from '@/components/ConfirmEndscreen.vue'
import PlayerStats from '@/components/PlayerStats.vue'
import { usegroupStore } from '@/stores/groups.js'
import { useQuestionStore } from '@/stores/questions.js'

export default {
  components: {
    QuizCategory,
    PlayerStats,
    ConfirmEndscreen
  },
  setup() {
    const questionStore = useQuestionStore()
    const groupStore = usegroupStore()
    return { groupStore, questionStore }
  },
  data() {
    return {
      apiUrl: this.$route.query.url,
      popup: false
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
