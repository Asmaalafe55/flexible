<script>
export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem('user')),
    }
  },
  methods: {
    closeEditPhotoBox() {
      this.$emit('closephoto')
    },
  },
}
</script>
<template>
  <div class="top-0 absolute w-[60rem] p-[16rem]">
    <div class="edit-photo-box">
      <div class="absolute w-[2rem] mt-[1rem] ml-[1rem] h-[2rem]">
        <button @click="closeEditPhotoBox">
          <img src="@/assets/img/x-icon.png" />
        </button>
      </div>
      <div class="p-12" id="profile-pic">
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

      <div class="flex justify-center space-x-14">
        <button class="flex flex-col items-center justify-center">
          <img class="w-[3rem] h-[3rem]" src="@/assets/img/pencile.png" />
          <div class="font-normal text-[30px]">Edit</div>
        </button>
        <button class="flex flex-col items-center justify-center">
          <img class="w-[3rem] h-[3rem]" src="@/assets/img/trash-icon.png" />
          <div class="font-normal text-[30px]">Delete</div>
        </button>
        <button class="flex flex-col items-center justify-center">
          <img class="w-[3rem] h-[3rem]" src="@/assets/img/camera_icon.png" />
          <div class="font-normal text-[30px]">Add photo</div>
        </button>
      </div>
    </div>
  </div>
</template>
