<template>
  <div class="page">
    <Navbar />
    <main class="max m-auto">
      <Nuxt />
    </main>
    <Footer />
    <div id="loading">
      <img src="../assets/img/logo-footer.png">
    </div>
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default {
  components: {
    Navbar,
    Footer
  },
  mounted() {
    function onReady(callback) {
      var intervalId = window.setInterval(function () {
        if (document.getElementsByTagName('body')[0] !== undefined) {
          window.clearInterval(intervalId);
          callback.call(this);
        }
      }, 1000);
    }

    function setVisible(selector, visible) {
      document.querySelector(selector).style.display = visible ? 'block' : 'none';
    }

    onReady(function () {
      setVisible('.page', true);
      setVisible('#loading', false);
    });
  },
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
  #loading {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    background-color: #94682A;
  }

  #loading img {
    width: 200px;
  }

  @media (max-width: 400px) {
    #loading img {
      width: 30%;
    }
  }
</style>