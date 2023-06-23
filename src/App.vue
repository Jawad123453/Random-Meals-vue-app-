<script setup>
import HeaderVue from './components/Header.vue';
import { RouterView } from 'vue-router'
</script>

<template>
  <HeaderVue/>
  <RouterView />
</template>

<style>
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
  font-family: sans-serif;
}
body{
  background-color: rgb(214, 214, 214);
}
</style>
