<template>
  <v-container class="setupBox body">
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
      <v-select v-model="this.selectedGroups[0]" label="Category 1" :items="this.groups"></v-select>
      <v-select v-model="this.selectedGroups[1]" label="Category 2" :items="this.groups"></v-select>
      <v-select v-model="this.selectedGroups[2]" label="Category 3" :items="this.groups"></v-select>
      <v-select v-model="this.selectedGroups[3]" label="Category 4" :items="this.groups"></v-select>
      <v-select v-model="this.selectedGroups[4]" label="Category 5" :items="this.groups"></v-select>
    </v-container>
    <v-container class="buttonBox">
      <v-btn
        v-if="pOneEmpty && pTwoEmpty"
        class="btn"
        :to="{ name: 'quiztemplate', query: { url: getSelectedGroups() } }"
        block
        rounded="xl"
        size="x-large"
        @click="saveToPinia"
        >Start Quiz</v-btn
      >
      <v-btn class="btn" to="/" rounded="s" size="small">Back</v-btn>
      <v-btn @click="getSelectedGroups">Hallo</v-btn>
    </v-container>
  </v-container>
</template>

<script>
import addPlayer from '@/components/addPlayer.vue'
import { useUserStore } from '@/stores/user.js'
import { usegroupStore } from '@/stores/groups.js'
import { useQuestionStore } from '@/stores/questions.js'

export default {
  components: {
    addPlayer
  },
  setup() {
    const questionStore = useQuestionStore()
    const userStore = useUserStore()
    const groupStore = usegroupStore()
    return { userStore, questionStore, groupStore }
  },
  data() {
    return {
      isHidden: true,
      playerOne: '',
      playerTwo: '',
      groups: [],
      selectedGroups: [],
      apiUrl: ''
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
      this.groupStore.sortGroups(this.selectedGroups)
    },
    getGroupNames() {
      const arr = []
      for (const name of this.groupStore.groupsArray) {
        arr.push(name.title)
      }
      return arr
    },
    getSelectedGroups() {
      let idArr = []
      for (const entry of this.selectedGroups) {
        for (const j of this.groups) {
          if (entry === j.title) {
            idArr.push(j.id)
          }
        }
      }
      return (
        'http://localhost:3000/quiz/collection?group=' +
        idArr[0] +
        '&group=' +
        idArr[1] +
        '&group=' +
        idArr[2] +
        '&group=' +
        idArr[3] +
        '&group=' +
        idArr[4]
      )
    }
  },
  computed: {
    pOneEmpty() {
      return this.playerOne.trim() !== ''
    },
    pTwoEmpty() {
      return this.playerTwo.trim() !== ''
    }
  },
  created() {
    fetch('http://localhost:3000/groups')
      .then((response) => response.json())
      .then((jsondata) => {
        this.groups = jsondata
        this.groupStore.initGroups(jsondata)
      })
  }
}
</script>
<style>
.setupBox {
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 0;
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
