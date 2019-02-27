<!--  -->
<template>
  <div>
    <router-view/>
  <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
  
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  data () {
    return {
    };
  },

  components: {
    FooterGuide
  },

  computed: {},

  // mounted: {},

  methods: {}
}

</script>
<style lang='stylus' >

</style>