<template>
  <body class="body">
    <v-btn class="highscore" variant="tonal"> View HighscoreList </v-btn>
    <v-container class="flexContainer">
      <h1 class="topHeader">Results</h1>
      <v-container class="scoreList">
        <h2 v-if="Tie">Tie!</h2>
        <h2 v-else>{{ this.userStore.playerarray[0].playername }} won!</h2>
        <div class="player" :key="index" v-for="(Player, index) in this.userStore.playerarray">
          <h3>{{ Player.playername }}: {{ Player.playerpoints }}</h3>
        </div>
      </v-container>
      <v-container class="buttonList">
        <routeButton
          to="/quizsetup"
          description="Play Again"
          variant="outlined"
          class="noLink"
          size="x-large"
        />
        <routeButton
          to="/"
          description="Homescreen"
          variant="outlined"
          class="noLink"
          size="x-large"
        />
      </v-container>
    </v-container>
  </body>
</template>

<script>
import { useUserStore } from '@/stores/user.js'
import routeButton from '@/components/routeButton.vue'
export default {
  setup() {
    const userStore = useUserStore()
    return { userStore }
  },
  components: {
    routeButton
  },
  data() {
    return {}
  },
  methods: {
    sortArrayForResult() {
      this.userStore.playerarray.sort((a, b) => b.playerpoints - a.playerpoints)
    }
  },
  computed: {
    Tie() {
      return (
        this.userStore.playerarray[0].playerpoints === this.userStore.playerarray[1].playerpoints
      )
    }
  },
  created() {
    this.sortArrayForResult()
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
