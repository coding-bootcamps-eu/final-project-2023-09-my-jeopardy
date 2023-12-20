<template>
  <div class="player-container">
    <div class="player" :key="index" v-for="(Player, index) in PlayerName">
      <h2>{{ Player }}</h2>
      <h3>{{ Points[index] }}</h3>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/user.js'
export default {
  setup() {
    const userStore = useUserStore()
    return { userStore }
  },
  data() {
    return {
      PlayerName: [],
      Points: []
    }
  },
  methods: {
    setPlayername() {
      const name = []
      const points = []
      for (const Name of this.userStore.playerarray) {
        name.push(Name.playername)
        points.push(Name.playerpoints)
      }
      this.PlayerName = name
      this.Points = points
    }
  },
  created() {
    this.setPlayername()
  }
}
</script>

<style scoped>
.player-container {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
.player {
  margin: auto;
}
</style>
