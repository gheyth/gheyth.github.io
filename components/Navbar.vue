<template>
  <header class="w-full max m-auto">
    <!-- <div class="h-7 px-8 bg-basic-02 flex">
      <nav class="flex justify-between items-center	w-full text-white">
        <ul class="flex">
          <li class="ml-3">
            <NuxtLink to="/">
              للمطورين
            </NuxtLink>
          </li>
          <li class="">
            <NuxtLink to="/">
              للمساهمين
            </NuxtLink>
          </li>

        </ul>
        <ul class="flex">
          <li class="ml-2 text-lg"><a class="h-0" href="/"><i class="fa-brands fa-twitter-square"></i></a></li>
          <li class="ml-2 text-lg"><a href="/"><i class="fa-brands fa-telegram"></i></a></li>
          <li class="text-lg"><a href="/"><i class="fa-brands fa-github"></i></a></li>
        </ul>

      </nav>
    </div> -->
    <div class="h-20 px-8 border-b-2 border-basic-02 flex justify-between items-center">
      <!-- icons for responsive -->
      <div class="icon-resp text-basic-02 hidden">
        <i class="fa-solid fa-bars"></i>
        <i class="fa-solid fa-xmark hidden"></i>
      </div>
      <!-- icons for responsive -->
      <nav class="">
        <div class="list-nav-resp">
          <ul class="list-nav flex">
            <li class="text-basic-01 ml-2">
              <NuxtLink class="py-4 px-6 pr-0 text-lg transition-all font-semibold hover:text-basic-02" to="/#What-Ghayth">ماهو غيث</NuxtLink>
            </li>
            <li class="text-basic-01 ml-2 ">
              <NuxtLink class="py-4 px-6 text-lg transition-all font-semibold hover:text-basic-02" to="/#Why-ghayth">لماذا
                غيث</NuxtLink>
            </li>
            <li class="text-basic-01 ml-2">
              <NuxtLink class="py-4 px-6 text-lg transition-all font-semibold hover:text-basic-02" to="/#Content">المحتوى</NuxtLink>
            </li>
            <li class="text-basic-01 ml-2">
              <NuxtLink class="py-4 px-6 text-lg transition-all font-semibold hover:text-basic-02" to="/about">حول المشروع</NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
      <div class="">
        <NuxtLink to="/"><img class="w-16" src="../assets/img/logo.png"></NuxtLink>
      </div>
    </div>
  </header>
</template>


<style>
  .list-nav-resp{
    transition: all 0.2s;
  }
</style>