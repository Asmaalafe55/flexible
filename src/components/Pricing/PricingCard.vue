<template>
  <div class="relative">
    <div class="flex justify-center">
      <div class="bg-[#D7CEC7E8] w-[21rem] h-[37rem] rounded-[20px]">
        <div class="cardName">{{ name }}</div>
        <div class="flex justify-center">
          <span class="cardPrice">
            <b class="priceDetails">{{ shekels }}</b>
            <b class="items-end">{{ price }}</b>
            <b v-if="monthly" class="priceDetails">/{{ monthly }}</b>
          </span>
        </div>
        <div class="cardSentence">{{ sentence }}</div>
        <div class="offers">
          <div class="cardOffers" v-for="(offer, i) in offers" :key="i">
            <hr class="line" />
            {{ offer }}
          </div>
          <hr class="line" />
        </div>
        <router-link to="/sign-in">
          <div class="btnPosition">
            <div class="pricingBtn">
              <div class="cardButton">Select</div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['name', 'shekels', 'price', 'monthly', 'sentence', 'offers'],
}
</script>
