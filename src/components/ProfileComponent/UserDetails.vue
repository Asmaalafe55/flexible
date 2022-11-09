<template>
  <div class="userDetails-container">
    <h1 class="text-[36px]">{{ this.user.name }}</h1>
    <div class="relative mt-0">
      <img
        v-if="this.user.type == 'google'"
        class="user-photo"
        :src="this.user.picture"
      />
      <img
        v-else-if="this.user.type == 'facebook'"
        class="user-photo"
        src="@/assets/img/mario.png"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem('user')),
    }
  },
  methods: {},
}
</script>
