<template>
  <body class="body">
    <v-btn
      class="highscore"
      variant="tonal"
      @click="(popup = true), sortHighscoreList()"
      size="small"
      >View HighscoreList</v-btn
    >
    <HighScorePopup v-if="popup === true" :dataArray="highscoreList" @ClosePopup="popup = false" />
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
import HighScorePopup from '@/components/HighScorePopup.vue'
import { API_URL } from '@/utils/config.js'
export default {
  setup() {
    const userStore = useUserStore()
    return { userStore }
  },
  components: {
    routeButton,
    HighScorePopup
  },
  data() {
    return {
      highscoreList: [],
      popup: false
    }
  },
  methods: {
    sortArrayForResult() {
      this.userStore.playerarray.sort((a, b) => b.playerpoints - a.playerpoints)
    },
    deleteLastHighscore() {
      console.log(this.highscoreList)
      for (const player of this.userStore.playerarray) {
        let lowPoints = Math.min(...this.highscoreList.map((obj) => obj.playerpoints))
        console.log(lowPoints)
        let playersWithMinPoints = this.highscoreList.filter(
          (player) => player.playerpoints === lowPoints
        )
        let minPLayerID = playersWithMinPoints[0].id
        let minPlayerPoints = playersWithMinPoints[0].playerpoints
        if (player.playerpoints >= minPlayerPoints) {
          //API wird angepasst -> delete lowest player -> push new player -> update local highscore
          this.fetchDelete(minPLayerID)
          this.fetchCreate(player)
          this.highscoreList = this.highscoreList.filter((player) => player.id !== minPLayerID)
          this.highscoreList.push(player)
        }
      }
      console.log(this.highscoreList)
    },
    fetchHighscore() {
      fetch(API_URL + '/highscore')
        .then((request) => request.json())
        .then((jsondata) => {
          this.highscoreList = jsondata
          this.deleteLastHighscore()
        })
    },
    fetchDelete(id) {
      fetch(API_URL + '/highscore/' + id, {
        method: 'DELETE'
      })
    },
    fetchCreate(player) {
      fetch(API_URL + '/highscore', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(player)
      })
    },
    sortHighscoreList() {
      this.highscoreList = this.highscoreList.sort((a, b) => b.playerpoints - a.playerpoints)
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
    this.fetchHighscore()
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
