<template>
  <div class="popup">
    <div class="popup-inner btn">
      <h2>Quiz beenden</h2>
      <p>Möchtest du das Quiz wirklich jetzt beenden ?</p>
      <v-btn class="color" to="/endscreen">Ja</v-btn>
      <v-btn class="color" @click="ClosePopup()">Nein</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    ClosePopup() {
      this.$emit('ClosePopup')
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
