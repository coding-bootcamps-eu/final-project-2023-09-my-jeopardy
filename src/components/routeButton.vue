<template>
  <router-link :to="route">
    <v-btn
      @click="submit"
      :description="description"
      :variant="variant"
      :size="size"
      :rounded="rounded"
      :height="height"
      class="btn"
      >{{ description }}
    </v-btn>
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
  },
  methods: {
    submit() {
      this.$emit('routeEvent')
    }
  }
}
</script>

<style scoped>
.btn {
  border: none;
}
</style>
