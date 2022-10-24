<template>
  <div class="my-4">
    <h1 class="text-2xl text-basic-02 font-bold mb-2">{{title}}</h1>
    <div class="box bg-white border rounded-lg p-4 border-r-8 border-basic-02">
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .box h2{
    margin-bottom: 8px;
  }
</style>

<script>
export default {
  props:{
    title:String
  }
}
</script>