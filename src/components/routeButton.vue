<template>
  <router-link :to="route" custom v-slot="{ navigate }">
    <v-btn
      @click="navigate"
      :description="description"
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
