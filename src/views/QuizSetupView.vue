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
      <v-btn block rounded="xl" size="x-large" @click="saveToLocal">Start Quiz</v-btn>
      <v-btn block rounded="s" size="small">Back</v-btn>
    </v-container>
  </v-container>
</template>

<script>
import addPlayer from '@/components/addPlayer.vue'
export default {
  components: {
    addPlayer
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
    saveToLocal() {
      localStorage.setItem('playerNames', JSON.stringify([this.playerOne, this.playerTwo]))
      localStorage.setItem('points', JSON.stringify([0, 0]))
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
  max-width: 30rem;
  gap: 3rem;
}
</style>
