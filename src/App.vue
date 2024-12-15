<script setup>
import UseHeader from './component/UseHeader.vue';
</script>

<template>
  <v-app>
    <v-main>
      <UseHeader />
      <RouterView />
    </v-main>
  </v-app>
</template>
