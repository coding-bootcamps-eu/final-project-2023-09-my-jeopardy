import { defineStore } from 'pinia'

export const usegroupStore = defineStore('groupStore', {
  state() {
    return {
      groupsArray: []
    }
  },
  actions: {
    initGroups(groups) {
      this.groupsArray = groups
    }
  }
})
