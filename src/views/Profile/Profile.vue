<template>
  <div class="bg-[#D7CEC7]">
    <div class="flex items-start justify-around mt-[2rem] space-x-4">
      <UserDetails />
      <ProfileSetting />
    </div>
  </div>
</template>
<script>
import UserDetails from '@/components/ProfileComponent/UserDetails.vue'
import ProfileSetting from '@/components/ProfileComponent/ProfileSetting.vue'
export default {
  data() {
    return {}
  },
  mounted() {
    if (
      !localStorage.getItem('user') &&
      !localStorage.getItem('access_token')
    ) {
      this.$router.push({ name: 'signin' })
    }
  },
  components: {
    UserDetails,
    ProfileSetting,
  },
}
</script>
