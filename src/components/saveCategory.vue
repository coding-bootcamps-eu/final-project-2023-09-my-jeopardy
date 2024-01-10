<template>
  <div class="popup">
    <div class="popup-inner btn">
      <p>Deine Kategorie wurde erfolgreich hinzugefügt</p>
      <p>Möchtest du noch eine hinzugefügen ?</p>
      <v-btn class="color" @click="refreshPage()">Ja</v-btn>
      <v-btn class="color" to="/quizdata">Nein</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    ClosePopup() {
      this.$emit('ClosePopup')
    },
    refreshPage() {
      this.$router.go()
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
}
.color {
  color: black;
}
</style>
