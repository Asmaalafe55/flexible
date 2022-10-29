<template>
  <div class="userDetails-container">
    <h1 class="font-poppins text-[36px]">{{ this.user.name }}</h1>
    <div class="relative">
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
      <div class="absolute bottom-0 right-0 h-12 w-12 my-5">
        <button @click="openEditPhoto">
          <img src="@/assets/img/pencile.png" />
        </button>
      </div>
    </div>
    <button @click="openEditProfile" class="edit-button">Edit profile</button>
  </div>
  <EditPhoto v-if="editPhotoButton === true" @closephoto="openEditPhoto" />
  <EditProfile
    v-if="editProfileButton === true"
    @closeprofile="openEditProfile"
  />
</template>
<script>
import EditPhoto from './EditPhoto.vue'
import EditProfile from './EditProfile.vue'
export default {
  data() {
    return {
      editPhotoButton: false,
      editProfileButton: false,
      user: JSON.parse(localStorage.getItem('user')),
    }
  },
  methods: {
    openEditPhoto() {
      this.editPhotoButton = !this.editPhotoButton
    },
    openEditProfile() {
      this.editProfileButton = !this.editProfileButton
    },
  },
  components: {
    EditPhoto,
    EditProfile,
  },
}
</script>
