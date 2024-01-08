<template>
  <v-container class="flexPlayer">
    <v-responsive class="mx-auto" max-width="250">
      <v-text-field
        @input="sendDataToParent"
        :rules="[rules.required]"
        label="PlayerName"
        variant="underlined"
        v-model="playerName"
        class="nameInput"
      ></v-text-field>
    </v-responsive>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      playerName: '',
      rules: {
        required: (value) => !!value || 'Field is required'
      }
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
.flexPlayer {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.nameInput {
  color: black;
}
</style>
