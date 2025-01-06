<template>
  <div class="p-4">
    <h1 class="mb-4 text-2xl font-bold">Пример использования reactiveOmit</h1>
    <div class="mb-4">
      <label class="block mb-2">Имя:</label>
      <input v-model="user.name" class="p-2 border border-gray-300 rounded" />
    </div>
    <div class="mb-4">
      <label class="block mb-2">Возраст:</label>
      <input v-model="user.age" type="number" class="p-2 border border-gray-300 rounded" />
    </div>
    <div class="flex mt-4 text-lg">
      Имя: {{ user.name }}
      <div v-if="user.name.length >= 7" class="px-1">Developer</div>
    </div>
    <div class="text-lg">
      Возраст: {{ user.age }}
      <div v-if="user.age >= 30" class="">Senior</div>
      <div v-else-if="user.age >= 26" class="">Middle</div>
      <div v-else class="">Junior</div>
    </div>
    <p class="text-lg">Данные без возраста: {{ userWithoutAge }}</p>
  </div>
</template>

<script setup>
import { reactiveOmit } from '@vueuse/core';
import { reactive } from 'vue';

// Создаем реактивный объект пользователя
const user = reactive({
  name: '',
  age: 0
});

// Используем reactiveOmit для создания нового объекта без свойства age
const userWithoutAge = reactiveOmit(user, 'age');
</script>
