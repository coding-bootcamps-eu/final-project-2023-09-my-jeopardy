<template>
  <body class="body">
    <h1>My Jeopardy</h1>
    <h2>{{ $route.query.category }}</h2>
    <h3>{{ Question[0].value }}</h3>
    <p>{{ Question[0].question }}</p>
    <div :key="answer.id" v-for="answer in Question[0].answers">
      <v-btn
        @click="getAnswer($route.query.id, answer.id)"
        :class="{
          btn: true,
          answer: true,
          'wrong-answer': setWrongAnswer(answer.id),
          'right-answer': setRightAnswer(answer.id)
        }"
        rounded="xl"
        size="x-large"
        :disabled="disabled"
        >{{ answer.text }}</v-btn
      >
    </div>

    <v-btn class="btn" @click="swapActivePlayer()" v-if="disabled" :to="link">Weiter</v-btn>
    <Player-Stats />
  </body>
</template>

<script>
import { useQuestionStore } from '@/stores/questions.js'
import { useUserStore } from '@/stores/user.js'
import PlayerStats from '@/components/PlayerStats.vue'

export default {
  components: {
    PlayerStats
  },
  setup() {
    const questionStore = useQuestionStore()
    const userStore = useUserStore()
    return { questionStore, userStore }
  },
  created() {
    this.getQuestion(this.$route.query.id)
    this.finishQuiz()
  },
  Unmounted() {
    this.swapActivePlayer()
  },
  data() {
    return {
      Question: Object,
      disabled: false,
      result: [],
      link: '/quiztemplate'
    }
  },
  computed: {
    activePlayer() {
      for (let i = 0; i < this.userStore.playerarray.length; i++) {
        if (this.userStore.playerarray[i].active) {
          console.log(i)
          return i
        }
      }
      console.log('fail')
      return 0
    }
  },
  methods: {
    setWrongAnswer(id) {
      if (this.result.length > 0) {
        if (this.result[id - 1].isValid === false) {
          return true
        }
      }
      return false
    },
    setRightAnswer(id) {
      if (this.result.length > 0) {
        if (this.result[id - 1].isValid === true) {
          return true
        }
      }
      return false
    },
    getQuestion(id) {
      this.Question = this.questionStore.questions.data.filter((Object) => {
        if (Object.id === id) {
          return Object
        }
      })
    },
    getAnswer(id, answer) {
      this.disabled = true
      const result = { data: [{ id: id, selected: [answer] }] }
      fetch('http://localhost:3000/quiz/result', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(result)
      })
        .then((res) => res.json())
        .then((jsondata) => {
          this.result = jsondata.details[0].answerDetails
          if (jsondata.details[0].isCorrect) {
            this.userStore.playerarray[this.activePlayer].playerpoints += this.Question[0].value
          }
        })
    },
    swapActivePlayer() {
      this.userStore.playerarray.forEach((Player) => (Player.active = !Player.active))
    },
    finishQuiz() {
      let endscreen = true
      for (let i = 0; i < this.questionStore.questions.data.length; i++) {
        if (!this.questionStore.questions.data.played) {
          endscreen = false
        }
      }
      if (endscreen) {
        this.link = '/endscreen'
      }
    }
  }
}
</script>

<style scoped>
* {
  font-size: 2rem;
  text-align: center;
}
h1 {
  font-size: 4rem;
}
h2 {
  font-size: 3rem;
}
.answer {
  margin: 1rem;
  width: 70%;
}

.wrong-answer {
  background-color: red;
}
.right-answer {
  background-color: green;
}
</style>
