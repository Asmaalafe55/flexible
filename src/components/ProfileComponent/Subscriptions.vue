<script>
export default {
  data() {
    return {
      offers: [
        'Custom domain',
        'Guest editors - 3',
        'Storage space - 2 GB',
        'Customer care - 24/7',
      ],
    }
  },
}
</script>
<template>
  <div class="flex justify-center">
    <div class="w-[450px] h-[587px] rounded-[20px]">
      <div
        class="flex justify-center pt-5 underline underline-offset-auto font-normal leading-[51px] text-[32px]"
      >
        Subscription
      </div>

      <div class="flex justify-center pt-5 text-[30px]">Basic</div>
      <div class="flex justify-center">
        <span class="flex pt-5 font-bold text-[47px]">
          <b class="flex items-center pt-[12px] text-[20px]">₪</b>
          <b class="items-end">57</b>
          <b class="flex items-center pt-[12px] text-[20px]">/monthly</b>
        </span>
      </div>
      <div class="flex justify-center pt-2 text-[20px]">You're getting:</div>
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
      <router-link to="/#pricing">
        <div class="absolute bottom-5 left-[8rem]">
          <div
            class="w-[15rem] h-[5rem] bg-[#B1A198] rounded-[18px] shadow-[0px_4px_4px_#00000080]"
          >
            <div
              class="flex justify-center cursor-pointer h-[74px] items-center text-[30px] hover:bg-white hover:rounded-[18px] active:h-[79px] active:bg-gray-100 active:shadow-[0px_4px_4px_#00000090]"
            >
              Change
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
