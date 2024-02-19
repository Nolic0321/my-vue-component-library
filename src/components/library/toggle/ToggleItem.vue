<script setup lang="ts">
import { ref } from 'vue'

const showThing1 = ref(true)
</script>

<template>
  <div class="flex flex-row">
    <Transition name="left">
      <div v-if="showThing1" @click="showThing1 = !showThing1">thing 1</div>
      <div v-else-if="!showThing1" @click="showThing1 = !showThing1">thing 2</div>
    </Transition>
  </div>
</template>

<style scoped>


.left-enter-active{
  transition: all 0.5s ease-in;
}

.left-leave-active{
  transition: all 0.5s ease-out;
}

.left-leave-from {
  opacity: 1;
}

.left-leave-to {
  opacity: 0;
}

.left-enter-from {
  opacity: 0;
  transform: translateX(-10px);
}

.right-enter-active {
  transition: all 0.5s ease-in;
}

.right-enter-from {
  opacity: 0;
  transform: translateX(10px);
}
</style>
