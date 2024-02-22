<template>
  <div>
    <LandingLayout>
      <router-view/>
    </LandingLayout>
  </div>
</template>

<script>
import LandingLayout from './components/LandingLayout.vue';

  export default {
    components: { LandingLayout }
}
</script>

<style scoped>

</style>