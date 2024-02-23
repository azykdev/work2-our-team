<template>
  <header class="bg-primary-950" @click="vantaBg">
    <div class="max-w-screen-xl mx-auto h-full flex items-center px-5">
      <div class="flex items-center justify-around ">
        <!-- Left content -->
        <div class="w-full md:w-1/2">
          <h1 class="text-center text-md-left font-bold text-slate-50 text-4xl md:text-5xl xl:text-6xl leading-tight">
            <span id="header-it-word">IT</span>
            mukammalligi <br> bilan dunyoyingizni yangilang.
          </h1>
          <p class="text-slate-300 mt-5 leading-relaxed text-center text-md-left">Bizga ish kelib chiqadigan ba'zi ozod
            odamlarning zavqini
            tanlash, uni qabul qilish farqiga ergashish qulaymi? Nima bo'lishidan qat'iy nazar</p>
        </div>

        <!-- Right content -->
        <div class="w-1/2 items-center justify-center d-none d-md-flex">
          <img style="box-shadow: 0 0 160px rgba(115, 115, 115, 0.5);" src="@/assets/images/about.jpg" alt="logo"
            class="rounded-circle opacity-80 d-none d-md-block w-80 lg:w-96 h-80 lg:h-96 object-cover">
        </div>
      </div>
    </div>
    <v-vanta ref="vanta" vantaId="vanta-bg" effect="net" :options="options"></v-vanta>
  </header>
</template>

<script>
import VVanta from 'vue-vanta-revamp';
export default {
  components: { VVanta },
  name: "HomeView",
  computed: {
    darkMode() {
      return this.$store.state.darkMode
    }
  },
  data() {
    return {
      // net effect

      options: {
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x5d90d6,
        backgroundColor: '#020617',
        points: 20.00,
        maxDistance: 16.00,
        spacing: 20.00
      },

      // rings effect

      // options: {
      //   mouseControls: true,
      //   touchControls: true,
      //   gyroControls: false,
      //   minHeight: 200.00,
      //   minWidth: 200.00,
      //   scale: 1.00,
      //   scaleMobile: 1.00,
      //   color: 0x5d90d6,
      //   backgroundColor: 0x9091f,
      //   points: 20.00,
      //   maxDistance: 16.00,
      //   spacing: 20.00
      // },
    }
  },

}
</script>
  
<style>
header {
  height: 100vh;
  position: relative;
  overflow: hidden;
  z-index: -10;
}

#vanta-bg {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  z-index: -5;
}

#header-it-word {
  background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>