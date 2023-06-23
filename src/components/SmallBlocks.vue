<template>
  <div class="w-full p-4 bg-white rounded cursor-pointer hover:scale-105 duration-500 shadow-2xl">
    <h1 class="font-bold text-xl">{{ smallIng.strIngredient }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    smallIng:Object
  }
}
</script>