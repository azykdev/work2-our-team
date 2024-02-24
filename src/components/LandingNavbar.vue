<template>
  <nav class="bg-transparent">
    <div class="px-5 max-w-screen-lg mx-auto d-flex align-center justify-between h-[64px]">
      <!-- Logo -->
      <div id="logo" class="d-flex align-center">
        <img src="@/assets/logo.png" alt="logo" width="30px">
        <span class="ml-2 text-primary-50 font-bold">Our Team</span>
      </div>

      <!-- Navigation -->
      <div id="menu" class="d-flex align-center">
        <!-- Navigation Links -->
        <ul id="nav-links" class="d-none d-lg-flex align-center">
          <li v-for="link in menuLinks" :key="link.title">
            <RouterLink class="text-primary-50" :to="link.to">{{ link.title }}</RouterLink>
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
          <v-btn color="grey-darken-1" icon="mdi mdi-facebook" variant="text" density="comfortable"
            title="Facebook"></v-btn>
          <v-btn color="grey-darken-1" icon="mdi mdi-send" variant="text" density="comfortable" title="Telegram"></v-btn>
          <v-btn color="grey-darken-1" icon="mdi mdi-instagram" variant="text" density="comfortable"
            title="Instagram"></v-btn>
          <v-btn color="grey-darken-1" icon="mdi mdi-email" variant="text" density="comfortable" title="Email"></v-btn>
        </div>

        <v-divider :thickness="2" vertical class="mx-4 d-lg-none"></v-divider>

        <!-- Menu btn in mobile -->
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn class="d-lg-none" color="primary" v-bind="props" icon="mdi-menu" variant="text"
              density="comfortable"></v-btn>
          </template>
          <v-list class="bg-grey-darken-4 px-2">
            <v-list-item v-for="(item, index) in menuLinks" :key="index" :value="index">
              <RouterLink class="text-primary-50" :to="item.to">{{ item.title }}</RouterLink>
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
        to: "/",
      },
      {
        title: "Loyihalar",
        to: "/",
      },
      {
        title: "Xizmatlar",
        to: "/",
      },
      {
        title: 'Biz haqimizda',
        to: "/",
      },
      {
        title: 'Yangiliklar',
        to: "/",
      },
      {
        title: 'Hamkorlik',
        to: "/",
      },
      {
        title: 'Bog\'lanish',
        to: "/",
      }
    ]
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
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
}

#nav-links {
  list-style: none;
}

#nav-links li {
  margin-left: 20px;
}

#nav-links li a {
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 14px;
}

#nav-links li a:hover {
  color: #7a39fc;
}
</style>