<script setup lang="ts">
import { watch } from 'vue'

const props = defineProps({
  modelValue: String
});
</script>

<template>
<input
  type="text"
  :value="props.modelValue"
  @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"/>
</template>

<style scoped>
@import "../../../assets/base.css";

@media (prefers-color-scheme: light) {
  input {
    background-color: white;
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
