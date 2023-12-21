<template>
  <v-btn
    :to="route"
    @click="submit"
    :description="description"
    :variant="variant"
    :size="size"
    :rounded="rounded"
    :height="height"
    :block="block"
    :disabled="disabled"
    class="btn"
    >{{ description }}
  </v-btn>
</template>

<script>
export default {
  props: {
    route: Object,
    description: String,
    variant: String,
    size: String,
    rounded: String,
    height: String,
    block: Boolean,
    disabled: Boolean
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
