<template>
  <v-container class="setupBox">
    <v-container class="playerBox">
      <addPlayer @transferName="getChildDataOne" />
      <addPlayer @transferName="getChildDataTwo" />
    </v-container>
    <v-container class="catBox">
      <v-radio-group>
        <v-radio label="Random Categories" value="Random" @click="isHidden = true"></v-radio>
        <v-radio label="Choose Categories" value="Choose" @click="isHidden = false"></v-radio>
      </v-radio-group>
    </v-container>
    <v-container class="dropdownBox" v-if="isHidden === false">
      <v-select label="Category 1" :items="[]"></v-select>
      <v-select label="Category 2" :items="[]"></v-select>
      <v-select label="Category 3" :items="[]"></v-select>
      <v-select label="Category 4" :items="[]"></v-select>
      <v-select label="Category 5" :items="[]"></v-select>
    </v-container>
    <v-container class="buttonBox">
      <v-btn
        v-if="pOneEmpty && pTwoEmpty"
        to="/quiztemplate"
        block
        rounded="xl"
        size="x-large"
        @click="saveToPinia"
        >Start Quiz</v-btn
      >
      <v-btn to="/" rounded="s" size="small">Back</v-btn>
    </v-container>
  </v-container>
</template>

<script>
import addPlayer from '@/components/addPlayer.vue'
import { useUserStore } from '@/stores/user.js'
import { useQuestionStore } from '@/stores/questions.js'

export default {
  components: {
    addPlayer
  },
  setup() {
    const questionStore = useQuestionStore()
    const userStore = useUserStore()
    return { userStore, questionStore }
  },
  data() {
    return {
      isHidden: true,
      playerOne: '',
      playerTwo: ''
    }
  },
  methods: {
    getChildDataOne(data) {
      this.playerOne = data
    },
    getChildDataTwo(data) {
      this.playerTwo = data
    },
    saveToPinia() {
      this.userStore.initUser(this.playerOne, this.playerTwo)
      fetch(
        'http://localhost:3000/quiz/collection?group=90270373-7e21-4f98-940c-b4c20ab21062&group=42344512-e214-458c-be19-63c029907a56'
      )
        .then((res) => res.json())
        .then((jsondata) => this.questionStore.initQuestion(jsondata))
    }
  },
  computed: {
    pOneEmpty() {
      return this.playerOne.trim() !== ''
    },
    pTwoEmpty() {
      return this.playerTwo.trim() !== ''
    }
  }
}
</script>
<style>
.setupBox {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.playerBox {
  margin-top: 3rem;
  display: flex;
  align-content: space-around;
}
.catBox {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.dropdownBox {
  display: flex;
  gap: 2rem;
}
.buttonBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 30rem;
  gap: 3rem;
}
.noLink {
  text-decoration: none;
  color: inherit;
}
</style>
