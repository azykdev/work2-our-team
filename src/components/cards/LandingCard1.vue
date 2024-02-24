<template>
  <div id="landing-card1" class="bg-slate-900">
    <span class="text-3xl text-slate-200 mb-4 inline-block bg-slate-800 px-2 py-1 rounded-md">{{ icon }}</span>
    <h3 class="text-lg font-semibold text-slate-200 mb-2">{{ title }}</h3>
    <p class="text-slate-500">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "LandingCard1",
  props: {
    icon: String,
    title: String,
    description: String
  }
}
</script>

<style scoped>
#landing-card1 {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  padding: 20px;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
</style>