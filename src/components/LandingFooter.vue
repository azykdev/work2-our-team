<template>
  <!-- FOOTER START -->
  <footer id="footer" class="bg-slate-950 ">
    <v-divider class=""></v-divider>
    <div class="max-w-screen-lg mx-auto px-5">
      <div class="d-flex flex-column justify-between">
        <v-row class="py-10">
          <v-col cols="12" sm="6">
            <h3 class="text-xl text-slate-200 font-semibold mb-3">Bizning xabarnomamizga obuna bo'ling</h3>
            <p class="text-slate-400">Biz oylik informatsion texnologiya byulletenini taklif qilamiz - tekshiring.</p>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field label="Email kiriting" variant="outlined" prepend-inner-icon="mdi-email"
              append-inner-icon="mdi-send" @click:append-inner="" single-line class="text-deep-purple"></v-text-field>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="py-10">
          <v-col cols="12" sm="6" lg="4">
            <div id="logo" class="d-flex align-center mb-4">
              <img src="@/assets/logo.png" alt="logo" width="30px">
              <span class="ml-2 text-primary-50 font-bold">Our Team</span>
            </div>
            <p class="text-slate-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco consectetur laboris.</p>

            <div id="social" class=" align-center d-flex mt-3">
              <v-btn color="deep-purple-darken-1 " icon="mdi mdi-facebook" variant="text" density="comfortable"
                title="Facebook"></v-btn>
              <v-btn color="deep-purple-darken-1 " icon="mdi mdi-send" variant="text" density="comfortable"
                title="Telegram"></v-btn>
              <v-btn color="deep-purple-darken-1 " icon="mdi mdi-instagram" variant="text" density="comfortable"
                title="Instagram"></v-btn>
              <v-btn color="deep-purple-darken-1 " icon="mdi mdi-email" variant="text" density="comfortable"
                title="Email"></v-btn>
            </div>
          </v-col>
          <v-col cols="12" sm="6" lg="2">
            <h3 class="text-xl text-slate-200 font-semibold mb-3 border-b-2 pb-1">Bizning xizmatlar</h3>

            <ul>
              <li><a href="#"
                  class="text-slate-50 hover:text-blue-400 text-sm border-b-[1px] inline-block mb-2 border-slate-700">StartUp
                  yechimlari</a>
              </li>
              <li><a href="#"
                  class="text-slate-50 hover:text-blue-400 text-sm border-b-[1px] inline-block mb-2 border-slate-700">Veb-ishlab
                  chiqish</a>
              </li>
              <li><a href="#"
                  class="text-slate-50 hover:text-blue-400 text-sm border-b-[1px] inline-block mb-2 border-slate-700">Tarmoq
                  xizmatlari</a>
              </li>
              <li><a href="#"
                  class="text-slate-50 hover:text-blue-400 text-sm border-b-[1px] inline-block mb-2 border-slate-700">SEO
                  optimallashtirish</a>
              </li>
              <li><a href="#"
                  class="text-slate-50 hover:text-blue-400 text-sm border-b-[1px] inline-block mb-2 border-slate-700">Telegram
                  bot</a></li>
              <li><a href="#"
                  class="text-slate-50 hover:text-blue-400 text-sm border-b-[1px] inline-block mb-2 border-slate-700">Ilovalar
                  ishlab
                  chiqish</a>
              </li>
            </ul>
          </v-col>
          <v-col cols="12" sm="6" lg="2">
            <h3 class="text-xl text-slate-200 font-semibold mb-3 border-b-2 pb-1">Foydali havolalar </h3>

            <ul>
              <li><a href="#"
                  class="text-slate-50 hover:text-blue-400 text-sm border-b-[1px] inline-block mb-2 border-slate-700">Biz
                  haqimizda </a>
              </li>
              <li><a href="#"
                  class="text-slate-50 hover:text-blue-400 text-sm border-b-[1px] inline-block mb-2 border-slate-700">Biz
                  bilan bog'lanish </a>
              </li>
              <li><a href="#"
                  class="text-slate-50 hover:text-blue-400 text-sm border-b-[1px] inline-block mb-2 border-slate-700">Loyihalar
                  xizmatlari</a>
              </li>
              <li><a href="#"
                  class="text-slate-50 hover:text-blue-400 text-sm border-b-[1px] inline-block mb-2 border-slate-700">Yangiliklar</a>
              </li>
              <li><a href="#"
                  class="text-slate-50 hover:text-blue-400 text-sm border-b-[1px] inline-block mb-2 border-slate-700">Hamkorlik
                  bot</a></li>
            </ul>
          </v-col>
          <v-col cols="12" sm="6" lg="4">
            <h3 class="text-xl text-slate-200 font-semibold mb-3 border-b-2 pb-1">Aloqa ma'lumotlari </h3>

            <ul>
              <li class="flex items-start mb-4">
                <span class="mdi mdi-phone mr-2 text-xl text-deep-purple-darken-1"></span>
                <div class="text-slate-50 ">
                  <h6>Telefon</h6>
                  <a class="text-sm inline-block text-deep-purple-darken-1" href="tel:+998 99 999 99 99">+998 99 999 99
                    99</a>
                </div>
              </li>
              <li class="flex items-start mb-4">
                <span class="mdi mdi-email mr-2 text-xl text-deep-purple-darken-1"></span>
                <div class="text-slate-50 ">
                  <h6>Elektron pochta </h6>
                  <a class="text-sm inline-block text-deep-purple-darken-1"
                    href="mailto:demo@example.com">demo@example.com</a>
                </div>
              </li>
              <li class="flex items-start mb-4">
                <span class="mdi mdi-map mr-2 text-xl text-deep-purple-darken-1"></span>
                <div class="text-slate-50 ">
                  <h6>Manzil</h6>
                  <a class="text-sm inline-block text-deep-purple-darken-1" href="#">526 Melrose Street, Water Mill, 11976
                    Nyu-York </a>
                </div>
              </li>
            </ul>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <!-- Copyright -->
        <div class="text-center flex items-center justify-between py-10 flex-wrap text-sm text-slate-400">
          <p class="text-center w-full">© 2024. All rights reserved</p>
          <p class="text-center w-full">Made with ❤️ azykdev</p>
        </div>
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