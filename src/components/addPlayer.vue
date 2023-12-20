<template>
  <v-container class="flexPlayer">
    <v-responsive class="mx-auto" max-width="250">
      <v-avatar class="avatar" image="https://picsum.photos/200/300" size="75"></v-avatar>
      <v-text-field
        @change="sendDataToParent"
        label="PlayerName"
        variant="outlined"
        v-model="playerName"
      ></v-text-field>
    </v-responsive>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      playerName: ''
    }
  },
  methods: {
    sendDataToParent() {
      this.$emit('transferName', this.playerName)
    }
  }
}
</script>
<style>
.roundedImg {
  height: 25px;
  width: 25px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}
.flexPlayer {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.avatar {
  margin: 1rem;
}
</style>
