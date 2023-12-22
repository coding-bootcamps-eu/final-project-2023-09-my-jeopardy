import { defineStore } from 'pinia'

export const useQuestionStore = defineStore('questionstore', {
  state() {
    return {
      questions: []
    }
  },
  actions: {
    initQuestion(Apidata) {
      this.questions = Apidata
    }
  }
})
