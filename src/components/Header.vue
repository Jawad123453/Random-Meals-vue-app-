<template>
  <div class="bg-white shadow-lg px-1 sm:px-10">
    <div class="container mx-auto flex justify-between items-center">
      <div><RouterLink to="/" class="text-orange-500 font-bold text-lg">Home</RouterLink></div>
      <ul class="flex items-center">
        <li><RouterLink to="/ByName" class="py-7 sm:px-3 px-3 hover:bg-orange-500 block hover:text-slate-100 duration-500 text-xs sm:text-lg">Search Meals</RouterLink></li>
        <li><RouterLink to="/ByLetter" class="py-7 sm:px-3 px-3 hover:bg-orange-500 block hover:text-slate-100 duration-500 text-xs sm:text-lg">Meals By Letter</RouterLink></li>
        <li><RouterLink to="/ByIngredients" class="py-7 sm:px-3 px-3 hover:bg-orange-500 block hover:text-slate-100 duration-500 text-xs sm:text-lg">Meals By Ingredients</RouterLink></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>