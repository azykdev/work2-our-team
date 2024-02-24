<template>
  <LandingNavbar />
  
  <slot></slot>

  <LandingFooter />
</template>

<script>
import LandingFooter from '@/components/LandingFooter.vue';
import LandingNavbar from '@/components/LandingNavbar.vue';
export default {
  components: { LandingNavbar, LandingFooter }
}
</script>

<style scoped></style>