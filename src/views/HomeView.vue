<script>
import { usegetItemsStore } from "../stores/counter"
import MainShapVue from '../components/MainShap.vue';

export default {
  components: { MainShapVue },
  setup() {
    const mainone = usegetItemsStore();
    mainone.getnumberofmeals();
    return { mainone }
  }
}
</script>

<template>
  <main>
    <div class="container mx-auto px-5 pb-5">
      <h1 class="text-4xl font-bold text-orange-500 mt-10 mb-5">Random Meals</h1>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        <MainShapVue v-for="meal in mainone.RandomMeal" :key="meal" :meal="meal" />
      </div>
    </div>
  </main>
</template>
