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
    sortGroups(idArr) {
      console.log(idArr)
      this.sortedGroups = []
      for (let i = 0; i < idArr.length; i++) {
        this.sortedGroups.push(
          this.groupsArray.filter((Group) => {
            if (Group.title === idArr[i]) {
              return Group
            }
          })[0]
        )
      }
    }
  }
})
