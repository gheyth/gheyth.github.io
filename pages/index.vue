<template>
  <div>
    <Intro />
    <WhatGhayth />
    <WhyGhayth />
    <Content />
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