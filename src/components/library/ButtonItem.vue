<script setup lang="ts">
import { ref } from 'vue'



const props = defineProps({
  name: String
});

const name = ref(props.name);
</script>

<template>
<button>{{name}}</button>
</template>

<style scoped>

</style>
