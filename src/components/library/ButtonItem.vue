<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  name: String
});

const name = ref(props.name);
</script>

<template>
<button class="px-2 py-1 rounded-lg">{{name}}</button>
</template>

<style scoped>
@import "src/assets/base.css";

button{
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
}
@media (prefers-color-scheme: light) {
  button {
    color: hsla(0, 0%, 100%, 0.81);
    background-color: var(--primary-800);
    box-shadow: inset 0 1px 0 hsl(204, 16%, 75%),
    0 1px 3px hsla(0, 0%, 0%, 20%);
  }
}

@media (prefers-color-scheme: dark) {
  button {
    color: hsla(0, 0%, 100%, 0.81);
    background-color: var(--primary-700);
    box-shadow: inset 0 1px 0 hsla(0, 0%, 100%, 50%),
    0 1px 3px hsla(0, 0%, 0%, .2);
  }
}
</style>
