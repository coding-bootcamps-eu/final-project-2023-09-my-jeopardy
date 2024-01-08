<template>
  <div class="player-container">
    <div
      class="player"
      :class="{ active: userStore.playerarray[index].active }"
      :key="index"
      v-for="(Player, index) in PlayerName"
    >
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
* {
  font-size: 2.5rem;
}
.active {
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px 10px white;
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: center;
  border-radius: 2rem;
  cursor: pointer;
}
.player-container {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
.player {
  margin: auto;
}
</style>
