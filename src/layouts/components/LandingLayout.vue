<template>
  <div>
    <LandingNavbar />
  </div>
  <slot></slot>
</template>

<script>
import LandingNavbar from '@/components/LandingNavbar.vue';
export default {
  components: { LandingNavbar }
}
</script>

<style scoped></style>