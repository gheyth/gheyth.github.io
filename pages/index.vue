<template>
  <div>
    <Intro />
    <section class="for-background">
      <WhatGhayth />
      <WhyGhayth />
      <Content />
    </section>
  </div>
</template>

<script>
import Intro from '~/components/home/Intro.vue'
import WhatGhayth from '../components/home/What-Ghayth.vue'
import WhyGhayth from '~/components/home/Why-ghayth.vue'
import Content from '~/components/home/Content.vue'
export default {
  components:{
    Intro,
    WhatGhayth,
    WhyGhayth,
    Content
  }
}
</script>

<style>
  .for-background{
    background-image: url('~assets/img/section-bg.jpg');
  }
</style>