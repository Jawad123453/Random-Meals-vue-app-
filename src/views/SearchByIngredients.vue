<template>
  <div>
    <main>
      <div class="container mx-auto px-5">
        <h1 class="text-4xl font-bold text-orange-500 mt-10 mb-5">Ingredients</h1>
        <div class="mb-10">
          <input type="text"
            class="w-full p-3 focus:outline-orange-500 focus:outline-4 focus:outline border-none rounded-xl"
            placeholder="Search By Meal..." @keypress="mainone.filtertheIng" v-model="mainone.searchIngredient">
        </div>
        <div class="text-center w-full" v-if="mainone.alltheIngr.length == 0">
          <h1 class="text-orange-500 font-bold">Loading...</h1>
        </div>
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-5 mb-5" v-if="mainone.alltheIngr.length > 0">
          <SmallBlocksVue v-for="smallIng in mainone.restoreitall" :key="smallIng" :smallIng="smallIng"/>
        </div>
      </div>
    </main>
  </div>
</template>


<script>
import { usegetItemsStore } from "../stores/counter"
import SmallBlocksVue from '../components/SmallBlocks.vue';

export default {
  components: { SmallBlocksVue },
  setup() {
    const mainone = usegetItemsStore();
    mainone.getIngredientsMeal()
    return { mainone }
  }
}
</script>