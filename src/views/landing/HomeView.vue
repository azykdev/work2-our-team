<template>
  <!-- HEADER START-->
  <header id="header" class="bg-transparent relative">
    <div class=" max-w-screen-lg mx-auto h-full flex items-center px-5 ">
      <!-- Header content -->
      <div class=" d-md-flex flex-row-reverse justify-space-around align-center">
        <!-- Image -->
        <div class="d-flex justify-space-around align-center md:w-1/2">
          <img style="box-shadow: 0 0 200px rgba(145, 42, 255, 0.5);" src="@/assets/images/about.jpg" alt=" logo"
            class="rounded-circle w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-96  lg:h-96 object-cover translate-y-[-16%] md:translate-y-0">
        </div>

        <!-- Title -->
        <div class="md:w-1/2 text-center text-md-left">
          <h1 class="font-bold text-slate-50 text-4xl md:text-5xl lg:text-6xl leading-tight">
            <span id="header-it-word">IT</span>
            mukammalligi <br> bilan dunyoyingizni yangilang.
          </h1>
          <p class="text-slate-500 text-lg sm:w-[80%] md:w-full mx-auto mt-5">Bizga ish kelib chiqadigan ba'zi ozod
            odamlarning zavqini
            tanlash, uni qabul qilish farqiga ergashish qulaymi?</p>

          <button id="head-btn1" class="mt-5 px-5 py-2 rounded-full text-slate-200 font-semibold">Batafsil</button>
          <button id="head-btn2" class="mt-5 ml-5 px-5 py-2 rounded-full text-slate-900 bg-slate-200 font-semibold">
            <span class="mdi mdi-play"></span> Video</button>
        </div>

      </div>

    </div>
    <!-- Background -->
    <div class="absolute top-0 left-0 w-full h-full bg-slate-950 -z-10"></div>
    <!-- Vanta -->
    <!-- <v-vanta ref="vanta" vantaId="vanta-bg" effect="net" :options="options"></v-vanta> -->
  </header>
  <!-- HEADER END -->

  <!-- SERVICES START -->
  <section id="services" class="bg-slate-950  pb-5">
    <div class="max-w-screen-lg mx-auto px-5">
      <v-row class=" sm:translate-y-[-10%] md:translate-y-[-20%] lg:translate-y-[-30%]">
        <v-col v-for="service in services" :key="service.title" cols="12" sm="6" md="4">
          <landing-card1 :title="service.title" :description="service.description" :icon="service.icon" />
        </v-col>
      </v-row>
    </div>
  </section>
  <!-- SERVICES END -->

  <!-- PROJECTS START -->
  <section id="projects" class="bg-slate-900 min-h-screen">
    <div class="max-w-screen-lg mx-auto px-5 py-10">
      <h1 class="font-semibold text-slate-100 text-xl leading-tight  text-center" style="letter-spacing: 5px;">Bizning
        Loyihalar</h1>
      <p class="text-slate-500 text-md mt-2 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>


    </div>
  </section>
  <!-- PROJECTS END -->

  <!-- ABOUT START -->
  <section id="about" class="bg-slate-950 min-h-screen">
    <div class="max-w-screen-lg mx-auto px-5 py-10">
      <h1 class="font-semibold text-slate-100 text-xl leading-tight  text-center" style="letter-spacing: 5px;">Biz
        Haqimizda</h1>
      <p class="text-slate-500 text-md mt-2 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>


    </div>
  </section>
  <!-- ABOUT END -->

  <!-- NEWS START -->
  <section id="news" class="bg-slate-900 min-h-screen">
    <div class="max-w-screen-lg mx-auto px-5 py-10">
      <h1 class="font-semibold text-slate-100 text-xl leading-tight  text-center" style="letter-spacing: 5px;">Yangiliklar
      </h1>
      <p class="text-slate-500 text-md mt-2 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>


    </div>
  </section>
  <!-- NEWS END -->

  <!-- PARTNERS START -->
  <section id="partners" class="bg-slate-950 min-h-screen">
    <div class="max-w-screen-lg mx-auto px-5 py-10">
      <h1 class="font-semibold text-slate-100 text-xl leading-tight  text-center" style="letter-spacing: 5px;">Hamkorlik
      </h1>
      <p class="text-slate-500 text-md mt-2 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>


    </div>
  </section>
  <!-- PARTNERS END -->

  <!-- CONTACT START -->
  <section id="contact" class="bg-slate-900 min-h-screen">
    <div class="max-w-screen-lg mx-auto px-5 py-10">
      <h1 class="font-semibold text-slate-100 text-xl leading-tight  text-center" style="letter-spacing: 5px;">Aloqa</h1>
      <p class="text-slate-500 text-md mt-2 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>


    </div>
  </section>
  <!-- CONTACT END -->
</template>

<script>
import VVanta from 'vue-vanta-revamp';
import LandingCard1 from '@/components/cards/LandingCard1.vue';
export default {
  components: { VVanta, LandingCard1 },
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
      services: [
        {
          title: 'Bepul onlayn xizmatlar 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
          icon: '💻'
        },
        {
          title: 'Bepul onlayn xizmatlar 2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
          icon: '📱'
        },
        {
          title: 'Bepul onlayn xizmatlar 3',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
          icon: '📚'
        },
        {
          title: 'Bepul onlayn xizmatlar 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
          icon: '💻'
        },
        {
          title: 'Bepul onlayn xizmatlar 2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
          icon: '📱'
        },
        {
          title: 'Bepul onlayn xizmatlar 3',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
          icon: '📚'
        },
      ]
    }
  },

}
</script>
  
<style>
header {
  height: 100vh;
  position: relative;
  overflow: hidden;
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
  background: -webkit-linear-gradient(120deg, #932be9 30%, #41d1ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 40px #932be9;
}

#head-btn1 {
  background: linear-gradient(120deg, #932be9 30%, #41d1ff);
  transition: all 0.3s ease;
}

#head-btn1:hover {
  box-shadow: 0 0 20px #932be9;
}

#head-btn2 {
  transition: all .3s ease;
}

#head-btn2:hover {
  box-shadow: 0 0 20px #fff;
}
</style>