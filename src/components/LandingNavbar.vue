<template>
  <!-- NAVBAR START -->
  <nav class="bg-slate-950">
    <div class="px-5 max-w-screen-lg mx-auto d-flex align-center justify-between h-[64px]">
      <!-- Logo -->
      <div id="logo" class="d-flex align-center">
        <img src="@/assets/logo/svg/logo-no-background.svg" alt="logo" width="150px">
        <!-- <span class="ml-2 text-primary-50 font-bold">Our Team</span> -->
      </div>

      <!-- Navigation Wrapper -->
      <div id="navigation-wrapper" class="d-flex align-center">

        <ul id="nav-ul" class="d-none d-lg-flex align-center">
          <li v-for="link in menuLinks" :key="link.title">
            <a :href="link.to" class="text-primary-50">{{ link.title }}</a>
          </li>
        </ul>



        <!-- <v-divider :thickness="2" vertical class="mx-4"></v-divider> -->

        <!-- Theme Switch -->
        <!-- <v-btn :color="darkMode ? 'yellow-darken-3' : 'deep-purple-lighten-1'"
          :icon="darkMode ? 'mdi-weather-sunny' : 'mdi-weather-night'" variant="text" density="comfortable"
          @click="$store.commit('toggleTheme')"></v-btn> -->

        <v-divider :thickness="2" vertical class="mx-4 d-none d-lg-block"></v-divider>

        <!-- Languages -->
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn color="deep-purple-lighten-1" v-bind="props" icon="mdi-translate" variant="text"
              density="comfortable"></v-btn>
          </template>

          <v-list class="bg-grey-darken-4 px-2">
            <v-list-item class="rounded-lg" v-for="(item, index) in languages" :key="index" :value="item.value">
              <v-list-item-title class="text-caption">{{ item.lang }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-divider :thickness="2" vertical class="mx-4 d-none d-sm-block"></v-divider>

        <!-- Social Media -->
        <div id="social" class=" align-center d-none d-sm-flex">
          <v-btn class="text-deep-purple-lighten-4" icon="mdi mdi-facebook" variant="text" density="comfortable"
            title="Facebook"></v-btn>
          <v-btn class="text-deep-purple-lighten-4" icon="mdi mdi-send" variant="text" density="comfortable"
            title="Telegram"></v-btn>
          <v-btn class="text-deep-purple-lighten-4" icon="mdi mdi-instagram" variant="text" density="comfortable"
            title="Instagram"></v-btn>
          <v-btn class="text-deep-purple-lighten-4" icon="mdi mdi-email" variant="text" density="comfortable"
            title="Email"></v-btn>
        </div>

        <v-divider :thickness="2" vertical class="mx-4 d-lg-none"></v-divider>

        <!-- Menu btn in mobile -->
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn class="d-lg-none" color="primary" v-bind="props" icon="mdi-menu" variant="text"
              density="comfortable"></v-btn>
          </template>
          <v-list class="bg-grey-darken-4 px-2">
            <v-list-item v-for="link in menuLinks" :key="link.title">
              <a :href="link.to" class="text-primary-50">{{ link.title }}</a>
            </v-list-item>

            <v-list-item class="d-sm-none">
              <v-btn color="grey-darken-1" icon="mdi mdi-facebook" variant="text" density="comfortable"
                title="Facebook"></v-btn>
              <v-btn color="grey-darken-1" icon="mdi mdi-send" variant="text" density="comfortable"
                title="Telegram"></v-btn>
              <v-btn color="grey-darken-1" icon="mdi mdi-instagram" variant="text" density="comfortable"
                title="Instagram"></v-btn>
              <v-btn color="grey-darken-1" icon="mdi mdi-email" variant="text" density="comfortable"
                title="Email"></v-btn>
            </v-list-item>
          </v-list>
        </v-menu>

      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "LandingNavbar",
  data: () => ({
    // darkMode: false,
    languages: [
      {
        lang: "English",
        value: "en",
      },
      {
        lang: 'Russian',
        value: 'ru',
      },
      {
        lang: "Uzbek",
        value: "uz",
      }
    ],
    menuLinks: [
      {
        title: "Bosh",
        to: "#header",
      },
      // {
      //   title: "Xizmatlar",
      //   to: "#services",
      // },
      {
        title: "Loyihalar",
        to: "#projects",
      },
      {
        title: 'Biz haqimizda',
        to: "#about",
      },
      {
        title: 'Yangiliklar',
        to: "#news",
      },
      {
        title: 'Hamkorlik',
        to: "#partners",
      },
      {
        title: 'Aloqa',
        to: "#contact",
      }
    ],

  }),
  methods: {
    // toggleTheme() {
    //   if (document.documentElement.classList.contains('dark')) {
    //     document.documentElement.classList.remove('dark')
    //     localStorage.setItem('color-theme', 'light')
    //     this.darkMode = false

    //   } else {
    //     document.documentElement.classList.add('dark')
    //     localStorage.setItem('color-theme', 'dark')
    //     this.darkMode = true
    //   }
    // }
  },
  computed: {
    darkMode() {
      return this.$store.state.darkMode
    }
  }
}
</script>

<style scoped>
nav {
  min-height: 64px;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
}

#nav-ul {
  list-style: none;
}

#nav-ul li {
  margin-left: 20px;
}

#nav-ul li a {
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 14px;
}

#nav-ul li a:hover {
  color: #7a39fc;
}
</style>