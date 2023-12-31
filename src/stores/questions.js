import { defineStore } from 'pinia'

export const useQuestionStore = defineStore('questionstore', {
  state() {
    return {
      questions: { data: [] }
    }
  },
  actions: {
    initQuestion(Apidata) {
      this.questions = Apidata
      this.questions.data.forEach((Object) => (Object.played = false))
    }
  }
})
