<template>
  <div>
    <LogoBackground />
    <WhatGhayth />
    <WhyGhayth />
    <Content />
  </div>
</template>

<script>
import LogoBackground from '~/components/home/Logo-background.vue'
import WhatGhayth from '../components/home/What-Ghayth.vue'
import WhyGhayth from '~/components/home/Why-ghayth.vue'
import Content from '~/components/home/Content.vue'
export default {
  components:{
    LogoBackground,
    WhatGhayth,
    WhyGhayth,
    Content
  }
}
</script>