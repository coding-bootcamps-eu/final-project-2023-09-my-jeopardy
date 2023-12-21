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
      <routeButton
        v-if="pOneEmpty && pTwoEmpty"
        class="noLink"
        to="/quiztemplate"
        block
        rounded="xl"
        size="x-large"
        description="Start Quiz"
        @routeEvent="saveToPinia"
      />
      <routeButton class="noLink" to="/" block rounded="s" size="small" description="Back" />
    </v-container>
  </v-container>
</template>

<script>
import addPlayer from '@/components/addPlayer.vue'
import { useUserStore } from '@/stores/user.js'
import routeButton from '@/components/routeButton.vue'
export default {
  components: {
    addPlayer,
    routeButton
  },
  setup() {
    const userStore = useUserStore()
    return { userStore }
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
