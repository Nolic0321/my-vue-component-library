<script setup lang="ts">
import Button from '@component-library/button/ButtonItem.vue'
import Input  from '@component-library/input/InputItem.vue'
import { computed, ref } from 'vue'
import Todo, { type TodoType } from '@/components/TodoItem.vue'

const todos = ref([
  {id:1, name: 'Create Todo Component', done: true},
  {id:2, name: 'Create Ability to add todo', done: true},
  {id:3, name: 'Create Ability to remove todo', done: false},
  {id:4, name: 'Update Todo when checked', done: false}
])
const newTodo = ref('')
const hideCompleted = ref(false);

const filteredTodos = computed(() =>{
  if(hideCompleted.value){
    return todos.value.filter((todo:TodoType) => !todo.done);
  }else{
    return todos.value;
  }
})

function addTodo() {
  const todo: TodoType = {
    id: todos.value.length + 1,
    name: newTodo.value,
    done: false
  }
  todos.value.push(todo);
  newTodo.value = ''
}

</script>

<template>
  <div>
    <h1>Todo</h1>
    <button @click="hideCompleted = !hideCompleted">Toggle Done Todos</button>
    <div class="flex flex-col">
      <div v-for="todo in filteredTodos" :key="todo.id">
        <Todo :name="todo.name" :done="todo.done" @checked="todo.done = !todo.done" />
      </div>
    </div>
    <div>
      <form @submit.prevent="addTodo">
        <Input v-model="newTodo" />
        <Button class="ml-2" name="Add Todo"/>
      </form>
    </div>
  </div>
</template>

<style scoped>
</style>
