<template>
  <div>
    <Navbar />
    <main class="max m-auto">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
  main{
    background-image: url('~assets/img/section-bg.jpg');
  } 
  /* exact link will show the primary color for only the exact matching link */
  a.nuxt-link-exact-active {
    color: #94682A;
  }
</style>