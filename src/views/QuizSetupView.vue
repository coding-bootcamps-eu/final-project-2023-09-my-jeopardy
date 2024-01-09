<template>
  <v-container class="setupBox body">
    <h1 class="headLine">My Jeopardy</h1>
    <h2 class="smallblack">Setup</h2>
    <v-container class="playerBox">
      <addPlayer @transferName="getChildDataOne" />
      <addPlayer @transferName="getChildDataTwo" />
    </v-container>
    <v-container class="catBox">
      <v-radio-group v-model="selectedRadio">
        <v-radio
          label="Random Categories"
          value="random"
          @click="(isHidden = true), (random = true), groupStore.shuffle()"
        ></v-radio>
        <v-radio
          label="Choose Categories"
          value="choose"
          @click="(isHidden = false), (random = false)"
        ></v-radio>
      </v-radio-group>
    </v-container>
    <v-container class="dropdownBox" v-if="isHidden === false">
      <v-select
        v-model="this.selectedGroups[0]"
        label="Category 1"
        :items="this.groups"
        :options="selectOptions"
      ></v-select>
      <v-select
        v-model="this.selectedGroups[1]"
        label="Category 2"
        :items="this.groups"
        :options="selectOptions"
      ></v-select>
      <v-select
        v-model="this.selectedGroups[2]"
        label="Category 3"
        :items="this.groups"
        :options="selectOptions"
      ></v-select>
      <v-select
        v-model="this.selectedGroups[3]"
        label="Category 4"
        :items="this.groups"
        :options="selectOptions"
      ></v-select>
      <v-select
        v-model="this.selectedGroups[4]"
        label="Category 5"
        :items="this.groups"
        :options="selectOptions"
      ></v-select>
    </v-container>
    <v-container class="buttonBox">
      <v-btn
        v-if="
          (pOneEmpty && pTwoEmpty && allSelectsHaveValue) ||
          (this.random === true && pOneEmpty && pTwoEmpty)
        "
        class="btn"
        :to="{ name: 'quiztemplate', query: { url: getSelectedGroups() } }"
        block
        rounded="xl"
        size="x-large"
        @click="saveToPinia"
        >Start Quiz</v-btn
      >
      <v-btn class="btn" to="/" rounded="s" size="small">Back</v-btn>
    </v-container>
  </v-container>
</template>

<script>
import addPlayer from '@/components/addPlayer.vue'
import { useUserStore } from '@/stores/user.js'
import { usegroupStore } from '@/stores/groups.js'
import { useQuestionStore } from '@/stores/questions.js'
import { API_URL } from '@/utils/config.js'

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
      random: true,
      groups: [],
      selectedGroups: ['', '', '', '', ''],
      selectOptions: [
        { label: 'Option 1 Label', value: 'option1' },
        { label: 'Option 2 Label', value: 'option2' },
        { label: 'Option 3 Label', value: 'option3' },
        { label: 'Option 4 Label', value: 'option4' },
        { label: 'Option 5 Label', value: 'option5' }
      ],
      apiUrl: '',
      selectedRadio: 'random'
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
      if (this.random === false) {
        let idArr = []
        for (const entry of this.selectedGroups) {
          for (const j of this.groups) {
            if (entry === j.title) {
              idArr.push(j.id)
            }
          }
        }
        return (
          API_URL +
          '/quiz/collection?group=' +
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
      } else {
        return (
          API_URL +
          '/quiz/collection?group=' +
          this.groupStore.groupsArray[0].id +
          '&group=' +
          this.groupStore.groupsArray[1].id +
          '&group=' +
          this.groupStore.groupsArray[2].id +
          '&group=' +
          this.groupStore.groupsArray[3].id +
          '&group=' +
          this.groupStore.groupsArray[4].id
        )
      }
    }
  },
  computed: {
    pOneEmpty() {
      return this.playerOne.trim() !== ''
    },
    pTwoEmpty() {
      return this.playerTwo.trim() !== ''
    },
    allSelectsHaveValue() {
      return this.selectedGroups.every((group) => group !== '')
    }
  },
  created() {
    fetch(API_URL + '/groups')
      .then((response) => response.json())
      .then((jsondata) => {
        this.groups = jsondata
        this.groupStore.initGroups(jsondata)
        this.groupStore.shuffle()
      })
  },
  watch: {
    selectedGroups: {
      handler(newValues) {
        console.log(this.selectedGroups)
        for (let i = 0; i < this.selectedGroups.length; i++) {
          for (let j = i + 1; j < this.selectedGroups.length; j++) {
            if (newValues[i] === newValues[j]) {
              this.selectedGroups[j] = ''
            }
          }
        }
      },
      deep: true
    }
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
  justify-content: center;
  align-items: center;
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
  color: black;
}
.dropdownBox {
  display: flex;
  gap: 2rem;
  color: black;
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
.headLine {
  font-size: 5rem;
  margin: 3rem;
}
.smallblack {
  color: black;
}
</style>
