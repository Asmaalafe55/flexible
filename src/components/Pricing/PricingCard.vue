<template>
  <div class="relative">
    <div class="flex justify-center">
      <div class="bg-[#D7CEC7E8] w-[21rem] h-[37rem] rounded-[18px]">
        <div class="flex justify-center pt-5 text-[30px]">{{ name }}</div>
        <div class="flex justify-center">
          <span class="flex pt-5 font-bold text-[47px]">
            <b class="flex items-center pt-[12px] text-[20px]">{{ shekels }}</b>
            <b class="items-end">{{ price }}</b>
            <b v-if="monthly" class="flex items-center pt-[12px] text-[20px]"
              >/{{ monthly }}</b
            >
          </span>
        </div>
        <div class="flex justify-center pt-2 text-[20px]">{{ sentence }}</div>
        <div class="flex flex-col items-center pt-[2rem]">
          <div
            class="flex flex-col items-center text-[20px]"
            v-for="(offer, i) in offers"
            :key="i"
          >
            <hr class="line" />
            {{ offer }}
          </div>
          <hr class="line" />
        </div>
        <div class="absolute bottom-5 left-[3rem]">
          <div class="pricingBtn">
            <div class="cardButton">
              <!-- <router-link v-if="!checkSignIn" to="/sign-in">
                Select
              </router-link> -->
              <a
                href="#!"
                class="paddle_button"
                data-theme="none"
                :data-product="product_id"
                >Select</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    'name',
    'shekels',
    'price',
    'monthly',
    'sentence',
    'offers',
    'product_id',
  ],
  methods: {
    checkSignIn() {
      return !!localStorage.getItem('user')
    },
  },
}
</script>
