<script>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Footer,
    Navbar,
    RouterView,
  },
  data() {
    return {
      path: '',
    }
  },
}
</script>

<template>
  <header>
    <Navbar />
  </header>
  <body>
    <RouterView />
  </body>
  <Footer v-if="this.$route.name != 'signin' && this.$route.name != 'signup'" />
</template>
