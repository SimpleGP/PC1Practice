<template>
  <div>
    <app-toolbar />
    <home-view />
    <app-footer />
  </div>
</template>

<script>
import AppToolbar from './components/toolbar.vue'
import AppFooter from './components/footer.vue'
import HomeView from './views/home.vue'

/**
 * @summary Root App component assembling Toolbar, Home, and Footer
 */
export default {
  name: 'app-root',
  components: {
    AppToolbar,
    AppFooter,
    HomeView
  }
}
</script>

<style>

</style>
