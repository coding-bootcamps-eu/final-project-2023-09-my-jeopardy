import { defineStore } from 'pinia'

export const usegroupStore = defineStore('groupStore', {
  state() {
    return {
      groupsArray: [],
      sortedGroups: []
    }
  },
  actions: {
    initGroups(groups) {
      this.groupsArray = groups
    },
    sortGroups(categorys) {
      console.log(categorys)
      if (categorys !== '') {
        this.sortedGroups = []
        for (let i = 0; i < categorys.length; i++) {
          console.log(
            this.groupsArray.filter((Group) => {
              if (Group.title === categorys[i]) {
                return Group
              }
            })
          )
          this.sortedGroups.push(
            this.groupsArray.filter((Group) => {
              if (Group.title === categorys[i]) {
                return Group
              }
            })[0]
          )
        }
      }
    },
    shuffle() {
      for (let i = this.groupsArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[this.groupsArray[i], this.groupsArray[j]] = [this.groupsArray[j], this.groupsArray[i]]
      }
      this.sortedGroups = this.groupsArray
      //this.sortGroups.slice(0, 5)
    }
  }
})
