<template>
  <v-btn class="highscore" variant="tonal"> View HighscoreList </v-btn>
  <v-container class="flexContainer">
    <h1 class="topHeader">Results</h1>
    <v-container class="scoreList">
      <div class="player" :key="index" v-for="(Player, index) in PlayerName">
        <h2>{{ Player }} {{ Points[index] }}</h2>
      </div>
    </v-container>
    <v-container class="buttonList">
      <router-link class="noLink" to="/quiztemplate">
        <v-btn variant="outlined"> Play Again </v-btn>
      </router-link>
      <router-link class="noLink" to="/quizstetup">
        <v-btn variant="outlined"> New Category </v-btn>
      </router-link>
      <router-link class="noLink" to="/homescreen">
        <v-btn variant="outlined"> Homescreen </v-btn>
      </router-link>
    </v-container>
  </v-container>
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
<style>
.highscore {
  position: absolute;
  right: 1rem;
  top: 1rem;
}
.flexContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
.topHeader {
  font-size: 5rem;
}
.scoreList {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  font-size: 3rem;
}
.buttonList {
  display: flex;
  justify-content: center;
  gap: 3rem;
}
.noLink {
  text-decoration: none;
  color: inherit;
}
</style>
