<script>
export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem('user')),
    }
  },
  methods: {
    closeEditProfileBox() {
      this.$emit('closeprofile')
    },
  },
}
</script>
<template>
  <div class="top-0 absolute w-[62rem] p-[16rem] h-[60rem]">
    <div class="edit-box">
      <div class="flex flex-row space-x-[25rem]">
        <div class="absolute w-[1.5rem] mt-[1rem] ml-[1rem] h-[1.5rem]">
          <button @click="closeEditProfileBox">
            <img src="@/assets/img/x-icon.png" />
          </button>
        </div>

        <div class="absolute text-[30px]">
          <button @click="closeEditProfileBox">save</button>
        </div>
      </div>
      <div class="edit-profile-input">
        <div class="pl-2 text-[#0C0C0C] pb-1">First Name</div>
        <div>
          <input
            type="text"
            id="fName"
            name="fName"
            :placeholder="this.user.name"
            required
            class="profile-input-text"
          />
        </div>
        <div class="pl-2 text-[#0C0C0C] pb-1">Last Name</div>
        <div>
          <input
            type="text"
            id="fName"
            name="fName"
            :placeholder="this.user.name"
            required
            class="profile-input-text"
          />
        </div>
        <div class="pl-2 text-[#0C0C0C] pb-1">Email</div>
        <div>
          <input
            type="text"
            id="fName"
            name="fName"
            :placeholder="this.user.email"
            required
            class="profile-input-text"
          />
        </div>
      </div>
    </div>
  </div>
</template>
