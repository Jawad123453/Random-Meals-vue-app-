<template>
  <div>
    <main>
      <div class="container mx-auto px-5">
        <h1 class="text-4xl font-bold text-orange-500 mt-10 mb-5">Search By Latter</h1>
        <div class="mb-3 flex gap-3 justify-center items-center flex-wrap">
          <RouterLink v-if="mainone.alphabets.length > 0" v-for="alphabet in mainone.alphabets" :key="alphabet" class="cursor-pointer hover:text-orange-500 duration-300 hover:scale-150" @click="mainone.searchbyletterfunc(alphabet.name)" :to="{ name: 'ByLetter', params: { alphabet: alphabet.name } }">{{ alphabet.name }}</RouterLink>
        </div>
        <div class="text-center w-full mt-5" v-if="mainone.allthesearchletter.length == 0">
          <h1 class="text-orange-500 font-bold">There Are No Meal</h1>
        </div>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-5"
          v-if="mainone.allthesearchletter.length > 0">
          <MainShap v-for="meal in mainone.allthesearchletter" :key="meal" :meal="meal" />
        </div>
      </div>
  </main>
</div>
</template>

<script>
import { usegetItemsStore } from "../stores/counter";
import { RouterLink } from 'vue-router';
import MainShap from '../components/MainShap.vue';
import { useRoute } from 'vue-router';
export default {
  components: { MainShap },
  setup() {
    const route = useRoute();
    const mainone = usegetItemsStore();
    mainone.getletters();
    mainone.searchbyletterfunc(route.params.alphabet)
    return { mainone }
  }
}
</script>
