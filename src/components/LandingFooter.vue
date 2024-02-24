<template>
  <!-- FOOTER START -->
  <footer id="footer" class="bg-slate-950 min-h-[calc(100vh-64px)]">
    <v-divider class=""></v-divider>
    <div class="max-w-screen-lg mx-auto px-5">
      <div class="d-flex">
        <v-row class="py-10">
          <v-col cols="12" sm="6">
            <h3 class="text-xl text-slate-200 font-semibold mb-3">Bizning xabarnomamizga obuna bo'ling</h3>
            <p class="text-slate-500">Biz oylik informatsion texnologiya byulletenini taklif qilamiz - tekshiring.</p>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field label="Email kiriting" variant="outlined" prepend-inner-icon="mdi-email"
              append-inner-icon="mdi-send" @click:append-inner="" single-line class="text-blue-400"></v-text-field>
          </v-col>
        </v-row>
      </div>
    </div>
  </footer>
  <!-- FOOTER END -->
</template>

<script>
export default {
  name: "LandingFooter",
}
</script>

<style scoped>
footer {}
</style>