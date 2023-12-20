<template>
  <div class="player-container">
    <div class="player" :key="index" v-for="(Player, index) in PlayerName">
      <h2>{{ Player }}</h2>
      <h3>{{ Points[index] }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      PlayerName: JSON.parse(localStorage.getItem('playerNames')) || ['Player 1', 'Player 2'],
      Points: JSON.parse(localStorage.getItem('points')) || [0, 0]
    }
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
