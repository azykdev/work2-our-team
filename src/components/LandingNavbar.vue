<template>
  <nav>
    <v-container class="pa-0">
      <div class="d-flex align-center justify-space-between">
        <!-- Logo -->
        <div id="logo" class="d-flex align-center">
          <img src="@/assets/logo.png" alt="logo" width="30px">
          <span class="ml-2">Our Team</span>
        </div>

        <!-- Menu -->
        <div id="menu" class="d-flex align-center">
          <!-- Menu Links -->
          <ul id="menu-links" class="d-flex align-center">
            <li v-for="link in menuLinks" :key="link.title">
              <RouterLink :to="link.to">{{ link.title }}</RouterLink>
            </li>
          </ul>

          <v-divider :thickness="2" vertical class="mx-4"></v-divider>

          <!-- Languages -->
          <v-menu open-on-hover>
            <template v-slot:activator="{ props }">
              <v-btn color="deep-purple-lighten-1" v-bind="props" icon="mdi-translate" variant="text"
                density="comfortable">

              </v-btn>
            </template>

            <v-list class="bg-grey-darken-4 px-2">
              <v-list-item class="rounded-lg" v-for="(item, index) in languages" :key="index" :value="item.value">
                <v-list-item-title class="text-caption">{{ item.lang }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-divider :thickness="2" vertical class="mx-4"></v-divider>

          <!-- Social Media -->
          <div id="social" class="d-flex align-center">
            <v-btn color="grey-darken-1" icon="mdi mdi-facebook" variant="text" density="comfortable"
              title="Facebook"></v-btn>
            <v-btn color="grey-darken-1" icon="mdi mdi-send" variant="text" density="comfortable"
              title="Telegram"></v-btn>
            <v-btn color="grey-darken-1" icon="mdi mdi-instagram" variant="text" density="comfortable"
              title="Instagram"></v-btn>
            <v-btn color="grey-darken-1" icon="mdi mdi-email" variant="text" density="comfortable" title="Email"></v-btn>
          </div>

        </div>
      </div>
    </v-container>
  </nav>
</template>

<script>
export default {
  name: "LandingNavbar",
  data: () => ({
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
  })
}
</script>

<style scoped>
nav {
  transition: background-color .5s;
  white-space: nowrap;
  position: fixed;
  min-height: 8vh;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: #1D1D1D;
  color: white;
  border-bottom: 1px solid #111;
  display: flex;
  align-items: center;
  padding: 10px 0;
}

#menu-links {
  list-style: none;
}

#menu-links li {
  margin-left: 20px;
}

#menu-links li a {
  text-decoration: none;
  color: #eee;
  transition: all 0.3s ease;
  font-size: 14px;
}

#menu-links li a:hover {
  color: #7a39fc;
}

/* #social::before,
#languages::before {
  content: "";
  width: 1px;
  height: 28px;
  background: #333;
  margin: 0 8px;
} */
</style>