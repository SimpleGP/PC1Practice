<template>
  <pv-card
      class="m-2 w-20rem"
      :id="`show-${index}`"
      role="article"
      :aria-labelledby="`show-title-${index}`"
  >
    <template #title>
      <h3 :id="`show-title-${index}`" class="text-lg font-semibold">{{ show.name }}</h3>
    </template>

    <template #content>

      <img v-if="imageSrc" :src="imageSrc" :alt="`Poster of ${show.name}`" class="w-full h-40 object-cover mb-2"/>

      <p><strong>Language:</strong> {{ show.language  }}</p>
      <p><strong>Status:</strong> {{ show.status }}</p>


      <div v-if="show.summary" class="mt-2" v-html="show.summary"></div>
    </template>

    <template #footer>
      <a :href="show.url" target="_blank" rel="noopener noreferrer" :aria-label="`Open ${show.name} on TVMaze`">
        <pv-button label="Learn more" icon="pi pi-external-link" />
      </a>
    </template>
  </pv-card>
</template>

<script>
/**
 * @summary Card component for rendering TV Show information (name, url, language, status, summary, image)
 * @author SimpleGP
 */
export default {
  name: 'show-card', // kebab-case when used in templates: <show-card>
  props: {
    show: { type: Object, required: true },
    index: { type: [String, Number], required: true }
  },
  computed: {
    imageSrc() {

      return this.show.image?.medium || this.show.image?.original || ''
    }
  }
}
</script>

<style scoped>

</style>
