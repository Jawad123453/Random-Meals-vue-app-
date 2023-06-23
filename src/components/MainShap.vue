<template>
  <div class="bg-white w-full h-96 max-h-auto rounded-xl">
  <RouterLink to="/Fillingpage" @click="mainone.fillthemeals(meal)">
    <div class="h-44 w-full">
      <img :src="meal.img" target="_blank" class="h-full w-full rounded-t-xl"/>
    </div>
    <div class="h-auto p-3 flex justify-between flex-col">
      <div class="mb-3">
        <h1 class="text-black font-bold">{{ meal.title }}</h1>
        <p class="text-sm h-24">{{ mainone.deceasethewords(meal.detales) }}</p>
      </div>
      <a :href="meal.youtubelike" class="text-md w-fit text-white px-3 py-2 bg-orange-500 rounded hover:opacity-80">Youtube</a>
    </div>
    </RouterLink>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import { usegetItemsStore } from "../stores/counter"
  export default {
  props: {
      meal:Object
    },
  setup() {
    const mainone = usegetItemsStore();
    return { mainone }
    },
  }
</script>
