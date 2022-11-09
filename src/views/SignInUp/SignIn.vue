<template>
  <div class="parallax">
    <img class="parallax-img" src="../../assets/img/bg.png" />
    <div class="sign-container">
      <div class="bg-[#F1E8E2] rounded-t-[20px] h-[70px]">
        <div class="signText">Sign In</div>
      </div>

      <div class="text-[25px] py-5 bg-[#D7CEC7]">
        <div class="flex flex-col mb-4 mx-2">
          <div class="formLabel">Email</div>
          <input
            class="formInput"
            type="email"
            id="email"
            name="email"
            v-model="emailInput"
            required
          />
        </div>
        <div class="flex flex-col mb-4 mx-2">
          <div class="formLabel">Password</div>
          <input
            class="formInput"
            type="password"
            id="password"
            name="password"
            v-model="passwordInput"
            required
          />
        </div>
        <div class="flex justify-center py-5">
          <button
            @click="signIn"
            class="text-xl primaryButton w-72 lg:w-80 lg:text-2xl"
          >
            Sign In
          </button>
        </div>
        <div class="flex lg:flex-row flex-col justify-around pt-5 mx-2">
          <button
            @click="facebookLogIn"
            type="button"
            class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
          >
            <svg
              class="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="facebook-f"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
              ></path>
            </svg>
            Sign in with Facebook
          </button>
          <button
            type="button"
            @click="googleLogIn"
            id="googleId"
            class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
          >
            <svg
              class="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Sign in with Google
          </button>
        </div>
        <div class="text-center text-[18px] text-black pt-4">
          Don’t have an account yet?
          <RouterLink
            class="text-[#013565F0] hover:underline"
            :to="{ path: '/sign-up' }"
          >
            Click here
          </RouterLink>
          to Sign up
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  data() {
    return {
      emailInput: '',
      passwordInput: '',
    }
  },

  components: {
    Navbar,
  },
  methods: {
    facebookLogIn() {
      FB.login((res) => {
        FB.api('/me?fields=name,email', function (response) {
          response.type = 'facebook'
          localStorage.setItem('user', JSON.stringify(response))
          window.location.href = '/'
        })
      })
    },
    signIn() {
      const data = {
        email: this.emailInput,
        password: this.passwordInput,
      }
      this.axios
        .post('http://localhost:4000/api/sign-in', data)
        .then((response) => {
          window.localStorage.setItem(
            'access_token',
            response.data.access_token
          )
          window.location.href = '/'
        })
        .catch((error) => console.log(error))
    },
  },

  mounted() {
    FB.init({
      appId: '631600558695178',
      cookie: true,
      xfbml: true,
      version: 'v15.0',
    })

    const handleCredentialResponse = (response) => {
      var base64Url = response.credential.split('.')[1]
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
      var jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
          })
          .join('')
      )

      const json = JSON.parse(jsonPayload)
      json.type = 'google'
      localStorage.setItem('user', JSON.stringify(json))
      window.location.href = '/'
    }

    window.google?.accounts.id.initialize({
      client_id:
        '905632566241-c0mi3crlia5q8h6tqe9uc2u647sjkpji.apps.googleusercontent.com',
      callback: handleCredentialResponse,

      prompt_parent_id: 'googleId',

      ux_mode: 'redirect',
    })

    window.google?.accounts.id.prompt((notification) => {
      if (notification.isNotDisplayed()) {
        console.log('Login prompt was not displayed')
      } else if (notification.isSkippedMoment()) {
        console.log('Login prompt was skipped')
      }
    })
  },
}
</script>
