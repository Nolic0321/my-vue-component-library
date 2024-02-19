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
      editMode: false,
      inputValue:''
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
      <InputItem class="ml-2" v-if="editMode" type="text" :model-value="name" />
      <span class="w-full"></span>
      <Transition name="edit">
          <v-icon v-if="!editMode" @click="editMode = !editMode" icon="more_vert"/>
      </Transition>
      <Transition name="delete">
        <v-icon v-if="editMode" @click="editMode = !editMode" icon="close"/>
      </Transition>
      <v-menu class="ml-2">
        <template v-slot:activator="{ props }">
          <v-btn variant="plain" density="compact" v-bind="props" :ripple="false">
          </v-btn>
        </template>
        <v-list>
          <v-list-item key="1" value="1">
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

.edit-enter-active,
.edit-leave-active{
  transition: all 0.5s ease-in-out;
}

.edit-leave-from{
  opacity: 1;
}

.edit-leave-to{
  opacity: 0;
}

.edit-enter-from {
  opacity: 0;
  transform: translateX(-10px);
}

.delete-enter-active{
  transition: all 0.5s ease-in;
}

.delete-enter-from {
  opacity: 0;
  transform: translateX(10px);
}
</style>
