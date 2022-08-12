<template>
  <section class="all-media calc max w-full m-auto relative">
    <video loop muted autoplay poster="img/videoframe.jpg" class="w-full vd calc">
      <!-- thanks: https://islamarchive.cc/main : for video -->
      <source src="~assets/intro_home.mp4" type="video/mp4">
    </video>
    <div class="absolute top-0 justify-center items-center flex w-full calc flex-wrap	">
      <div>
        <h1 class="text-basic-01 text-7xl font-black">حَاضِنَةُ غَيْثٍ</h1>
        <p class="text-basic-01 text-2xl mt-3">
          فَتَعَالَى اللَّهُ الْمَلِكُ الْحَقُّ ۖ <br>لَا إِلَٰهَ إِلَّا هُوَ رَبُّ الْعَرْشِ الْكَرِيمِ (116)
        </p>
        <a class="text-white  text-center inline-block border-2 border-white w-full py-1 mt-5 rounded-md hover:bg-basic-02 hover:border-basic-01 transition-all"
          href="#Content">
          اَلذَّهَاب إِلَى اَلْمُحْتَوَى
        </a>
      </div>
      <img class="w-36" src="../../assets/img/logo2.png">
    </div>
  </section>
</template>

<style>
  .all-media{
    overflow: hidden;
  }
    video {
      width: 100vw;
      object-fit: cover;
      position: sticky;
      top: 0;
      left: 0;
      z-index: -1;
    }
  .calc{
    height: calc(100vh - 64px);
  }
  .vd{
        filter: brightness(0.3);
  }
</style>