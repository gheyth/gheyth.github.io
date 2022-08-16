<template>
  <section id="Content" class="w-full py-16 flex justify-center items-center">
    <div>
      <h1 class="text-center text-basic-02 text-6xl font-semibold">اَلْمُحْتَوَى</h1>
      <div class="cards grid gap-8 grid-cols-3 grid-rows-none flex-wrap">
        <Project 
          title="مَشْرُوعٌ أَحَمِدَ"
          info="مَوْسُوعَةُ بَسيطَةُ تَتَنَاوَلُ احاديث الرَّسُولَ وَ سَيْرَتُهُ وَمَوَاقِفُ مِنْ حَيَاتِهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ"
          img="project-ahmed.png" 
        />
      </div>
    </div>
  </section>
</template>

<script>
import Project from '~/components/home/Project.vue'
export default {
  components: {
    Project,
  }
}
</script>