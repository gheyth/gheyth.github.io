<template>
  <div class="card rounded-2xl px-3 py-3 mt-28 w-72 bg-white relative">
    <div class="flex items-center justify-center py-5 border rounded-xl h-60">
      <img class="rounded-xl" :src="require('~/assets/img/project/' + img)">
    </div>
    <div class="mt-4 text-basic-02">
      <h1 class="font-black	text-2xl">{{title}}</h1>
      <p class="text-1xl mt-2 font-semibold	">{{info}}</p>
      <a target="_blank" class="inline-block w-full bg-basic-02 text-white font-semibold text-center rounded-xl mt-2 py-1" :href=link>الدخول</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title:String,
    info: String,
    img: String,
    link: String
  }
}
</script>

<style>
  .card{
    box-shadow: #cca35a 0px 4px 8px -2px, #cca35a 0px 0px 0px 1px;
  }
</style>