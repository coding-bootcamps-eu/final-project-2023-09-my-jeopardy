<template>
  <div class="popup">
    <div class="popup-inner btn">
      <h1>Highscore List</h1>
      <ul>
        <li v-for="player in dataArray" :key="player">
          <b>{{ player.playername }}</b
          >: {{ player.playerpoints }}
        </li>
      </ul>
      <v-btn class="closeBtn" @click="ClosePopup()">Close HighscoreList</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    ClosePopup() {
      this.$emit('ClosePopup')
    }
  },
  props: {
    dataArray: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped>
* {
  color: black;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-inner {
  background: #fff;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.color {
  color: black;
}
.closeBtn {
  margin-top: 3rem;
  margin-inline: 5rem;
}
h1 {
  margin-bottom: 1rem;
}
</style>
