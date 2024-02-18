<script lang="ts">
import { defineComponent } from 'vue'
import InputItem from '@component-library/input/InputItem.vue'

export type TodoType = {
  id: number;
  name: string;
  done: boolean;
}
export default defineComponent({
  components: { InputItem },
  props: {
    id: String,
    name: String,
    done: Boolean
  },
  data() {
    return {
      inputChecked: this.done,
      editMode: false
    }
  },
  emits: ['checked'],
  computed: {
    isEven() {
      return (this.id % 2) === 0
    }
  },
  methods: {
    checked() {
      this.$emit('checked', this.id)
    }
  }
})
</script>

<template>
  <div class="flex items-center text-no-wrap">
    <input :id="id"
           type="checkbox"
           v-model="inputChecked"
           :value="name"
           @change="checked" />
    <div class="flex flex-row justify-space-between flex-grow-1 ml-2" :class="{'bg-gray-300 dark:bg-gray-800':isEven}">

      <span v-if="!editMode"
            :class="{'line-through':inputChecked,'w-full':true, 'text-gray-400 dark:text-gray-600':inputChecked}">{{ name
        }}</span>
      <InputItem class="ml-2" v-if="editMode" type="text" v-model="name" />
      <span class="w-full"></span>
      <v-menu class="ml-2">
        <template v-slot:activator="{ props }">
          <v-btn variant="plain" density="compact" v-bind="props" :ripple="false">
            <v-icon icon="more_vert"></v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item key="1" value="1" @click="">
            <v-list-item-title>Remove</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>
<style scoped>
input[type="checkbox"] {
  box-shadow: inset 0 0 1px hsla(0, 0%, 0%, 0.1),
  0 0 0 hsla(0, 0%, 100%, 0.15);
}
</style>
