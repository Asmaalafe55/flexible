<template>
  <!-- <ul id="menu" class="menu">

      <router-link
        v-if="checkSignIn()"
        to="/profile"
        class="menu-link"
        @click="focused = 'profile'"
      >
        <div v-if="focused === 'profile'" class="underlined">
          {{ this.user.name }}
        </div>
        <div v-else>{{ this.user.name }}</div>
      </router-link>
      <router-link
        v-if="!checkSignIn()"
        to="/sign-in"
        id="signin"
        class="menu-link"
      >
        <span>Sign in</span>
      </router-link>
      <router-link
        v-if="checkSignIn()"
        to="/"
        @click="handleSignOut(e)"
        class="menu-link"
      >
        <span>Sign Out</span>
      </router-link>
    </div>
  </ul> -->
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div
      class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl pl-4 pr-4 md:px-6 py-2.5"
    >
      <a href="/" class="flex items-center">
        <div
          class="w-10 h-10 rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-[50px] border-primary border-[10px]"
        />
        <span
          class="self-center text-xl lg:text-3xl font-semibold whitespace-nowrap ml-4"
        >
          Flexible
        </span>
      </a>
      <div class="flex items-center">
        <a
          href="tel:5541251234"
          class="mr-6 text-sm font-medium text-gray-500 hover:underline"
          >(555) 412-1234</a
        >
        <router-link
          class="text-sm font-medium text-primary dark:text-blue-500 hover:underline"
          :to="{ path: '/sign-in' }"
        >
          Login
        </router-link>
      </div>
    </div>
  </nav>
  <nav class="bg-gray-50 dark:bg-gray-700">
    <div class="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
      <div class="flex items-center">
        <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
          <li>
            <router-link
              :to="{ path: '/', hash: '#about' }"
              @click="focused = 'aboutUs'"
            >
              <div class="text-gray-900 hover:underline">About</div>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ path: '/', hash: '#wantSite' }"
              @click="focused = 'wantSite'"
            >
              <div class="text-gray-900 hover:underline">I want a site</div>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ path: '/', hash: '#contact' }"
              @click="focused = 'contact'"
            >
              <div class="text-gray-900 hover:underline">Contact</div>
            </router-link>
          </li>
          <li>
            <router-link :to="{ path: '/pricing' }">
              <div class="text-gray-900 hover:underline">Pricing</div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  created() {
    window.addEventListener('scroll', this.handleScroll)
    window.onscroll = function () {
      this.handleScroll
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  data() {
    return {
      focused: 'aboutus',
      user: JSON.parse(localStorage.getItem('user')),
    }
  },
  methods: {
    handleSignOut(event) {
      localStorage.removeItem('user')
      window.location.href = '/'
    },
    checkSignIn() {
      return !!localStorage.getItem('user')
    },
    handleScroll() {
      let sticky = document.getElementById.offsetTop
      if (window.pageYOffset >= sticky) {
        document.getElementById('menu')?.classList.add('sticky')
      } else {
        document.getElementById('menu')?.classList.remove('sticky')
      }
    },
  },
}
</script>
