<template>
  <div>
    <main>
      <div class="container mx-auto px-5">
        <h1 class="text-4xl font-bold text-orange-500 mt-10 mb-5">Search Meal By Name</h1>
        <div class="mb-10">
          <input type="text" class="w-full p-3 focus:outline-orange-500 focus:outline-4 focus:outline border-none rounded-xl" placeholder="Search By Meal..." v-model="mainone.searhthemeal" @input="enterthesearch">
        </div>
        <div class="text-center w-full" v-if="mainone.SearchMeal.length == 0">
          <h1 class="text-orange-500 font-bold">No Meal Selected</h1>
        </div>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-5" v-if="mainone.SearchMeal.length >0">
          <MainShap v-for="meal in mainone.SearchMeal" :key="meal" :meal="meal" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import MainShap from '../components/MainShap.vue';
import { usegetItemsStore } from "../stores/counter"
export default {
  components: { MainShap },
  setup() {
    const mainone = usegetItemsStore();
    return { mainone }
  },methods: {
    enterthesearch() {
      this.mainone.SearchMeal = [];
      this.mainone.getSearchMeal();
    }
  },
}
</script>