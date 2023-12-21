<template>
  <router-link :to="route">
    <v-btn
      @click="navigate"
      :description="description"
      class="noLink"
      :variant="variant"
      :size="size"
      :rounded="rounded"
      :height="height"
      >{{ description }}</v-btn
    >
  </router-link>
</template>

<script>
export default {
  props: {
    route: String,
    description: String,
    variant: String,
    size: String,
    rounded: String,
    height: String
  }
}
</script>
<style>
.noLink {
  text-decoration: none;
  color: black;
}
</style>
