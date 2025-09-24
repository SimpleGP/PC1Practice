<script setup>
import { ref, onMounted } from 'vue'
import { fetchShows } from '../services/show.js'
import ShowCard from '../components/show-card.vue'
import AppToolbar from '../components/toolbar.vue'
import AppFooter from '../components/footer.vue'

const shows = ref([])

onMounted(async () => {
  shows.value = await fetchShows()
})
</script>

<template>
  <div>


    <section class="p-4">
      <h2 class="text-2xl mb-4">All Shows</h2>
      <div class="flex flex-wrap justify-content-center">
        <ShowCard v-for="(s, i) in shows" :key="s.name" :show="s" :index="i" />
      </div>
    </section>


  </div>
</template>
