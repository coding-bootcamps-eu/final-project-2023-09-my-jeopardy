import { defineStore } from 'pinia'

export const useUserStore = defineStore('userstore', {
  state() {
    return {
      playerarray: [
        { playername: '', playerpoints: 0, active: true },
        { playername: '', playerpoints: 0, active: false }
      ]
    }
  },
  actions: {
    initUser(usersnameOne, usersnameTwo) {
      this.playerarray[0].playername = usersnameOne
      this.playerarray[1].playername = usersnameTwo
    }
  }
})
