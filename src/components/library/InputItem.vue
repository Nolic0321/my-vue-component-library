<script setup lang="ts">
const props = defineProps({
  model: String
});
</script>

<template>
<input
  type="text"
  v-model="props.model" />
</template>

<style scoped>
@import "src/assets/base.css";

@media (prefers-color-scheme: light) {
  input {
    box-shadow: inset 0 2px 2px hsla(0, 0%, 0%, 0.1),
    0 1px 0 hsla(212, 100%, 97%, 79%);
  }
}

@media (prefers-color-scheme: dark) {
  input {
    background-color: var(--color-background-mute);
    padding-left: 2px !important;
    box-shadow: inset 0 2px 2px hsla(0, 0%, 0%, 100%),
    0 1px 0 hsla(0, 0%, 100%, 50%);
  }
}
</style>
