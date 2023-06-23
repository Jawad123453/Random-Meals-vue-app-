<template>
  <div>
    <div v-if="mainone.mealpagearray.length == 0">
      <h1 class="font-bold text-3xl text-center mt-5 text-orange-500">No info</h1>
    </div>
    <div class="w-full" v-else>
      <div class="sm:w-3/4 w-full mx-auto my-10 px-5 sm:px-0">
        <h1 class="text-orange-500 md:text-3xl text-xl font-bold my-5">{{ mainone.mealpagearray.title }}</h1>
        <img :src="mainone.mealpagearray.img" class="w-full mb-3">
        <div class="flex sm:items-center justify-between sm:flex-row flex-col items-start gap-3 sm:gap-0">
          <p class="text-black font-bold">Catigory: <span class="font-normal">{{ mainone.mealpagearray.Catigory }}</span></p>
          <p class="text-black font-bold">Area: <span class="font-normal">{{ mainone.mealpagearray.Area }}</span></p>
          <p class="text-black font-bold">Tags: <span class="font-normal">{{ mainone.mealpagearray.tags }}</span></p>
        </div>
        <p class="w-full mt-7">{{ mainone.mealpagearray.detales }}</p>
        <div class="flex w-full justify-between mt-10 sm:flex-row flex-col items-start sm:gap-0 gap-5">
          <div class="basis-1/2">
            <h1 class="text-3xl font-bold mb-3">Ingredients</h1>
            <ul class="list-none">
              <li class="text-lg" v-for="(mainmeal, index) in mainone.mealpagearray.Ingredients[0]">{{ index + 1 }}. {{ mainmeal }}</li>
            </ul>
          </div>
          <div class="basis-1/2">
            <h1 class="text-3xl font-bold mb-3">Measers</h1>
            <ul class="list-none">
              <li class="text-lg" v-for="(mainmeal, index) in mainone.mealpagearray.Measers[0]">{{ index + 1 }}. {{ mainmeal }}</li>
            </ul>
          </div>
        </div>
        <div class="flex items-center gap-10 mt-10">
          <a :href="mainone.mealpagearray.youtubelike" class="text-md w-fit text-white px-3 py-2 bg-orange-500 rounded hover:opacity-80">Youtube</a>
          <RouterLink to="/" class="text-blue-900">Home page</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import { usegetItemsStore } from "../stores/counter"
  export default {
    setup() {
      const mainone = usegetItemsStore();
      return { mainone }
    }
  }
</script>
