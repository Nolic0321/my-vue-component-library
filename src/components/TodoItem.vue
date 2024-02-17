<script lang="ts">
import {defineComponent} from "vue";

export type TodoType = {
  id: number;
  name: string;
  done: boolean;
}
export default defineComponent({
  props:{
    id: String,
    name: String,
    done: Boolean
  },
  data(){
    return {
      inputChecked: this.done
    }
  },
  emits: ['checked'],
  methods:{
    checked(){
      this.$emit('checked', this.id);
    }
  }
});
</script>

<template>
  <div>
    <input :id
           type="checkbox"
           v-model="inputChecked"
           :value="name"
           @change="checked"/> <span :class="{'line-through':inputChecked}" >{{name}}</span>
  </div>
</template>

<style scoped>
input[type="checkbox"] {
  box-shadow: inset 0 2px 2px hsla(0, 0%, 0%, 0.1),
  inset 0 2px 0 hsla(0, 0%, 100%, 0.15);
}
</style>
