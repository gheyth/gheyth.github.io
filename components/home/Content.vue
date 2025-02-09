<template>
  <section id="Content" class="w-full py-16 flex justify-center items-center">
    <div>
      <h1 class="text-center text-basic-02 text-6xl font-semibold">اَلْمُحْتَوَى</h1>
      <div class="cards grid gap-8 grid-cols-3 grid-rows-none flex-wrap">
        <Project 
          title="مَشْرُوعُ الْفُرْقَانِ"
          info= "هُوَ مَشْرُوعُ رَقْمِي دِينِي حَوْلَ الْقُرْآنِ وَ يَتَنَاوَلُ الأيات آيَةً بِآيَةٍ مَعَ الشَّرْحِ وَ التَّرْجَمَةُ وَ الإستماع" 
          img="project-alfur9an.png"
          link="https://gheyth.github.io/al-furqan/"
          btn="تصفح"
        />
        <Project 
          title="مَشْرُوعٌ أَحْمَدْ"
          info= "هُوَ مَوْسُوعَةُ بَسيطَةُ تَتَنَاوَلُ عِدَّةُ ابواب لِعِدَّةِ أَحَادِيثِ أَخْلَاَقِيَّةٌ وَ دُعَاءٌ وَ سِيَرَةٌ الرَّسُولِ صَلَّى اللهُ عَلَيْهِ وَ سُلَّمٌ" 
          img="project-ahmed.png"
          link="https://gheyth.github.io/ahmed/"
          btn="تصفح"
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