<template>
  <router-link :to="route" custom v-slot="{ navigate }">
    <v-btn @click="navigate" :v-text="description"></v-btn>
  </router-link>
</template>

<script>
export default {
  props: {
    route: String,
    description: String
  }
}
</script>
