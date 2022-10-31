<template>
  <div class="flex justify-center font-poppins">
    <div class="bg-[#013565] w-full h-[800px] space-y-11">
      <div class="pricingTxt">Pricing</div>
      <div class="flex justify-center space-x-11">
        <PricingCard
          :name="name[0]"
          :price="price[0]"
          :offers="offers[0]"
          :product_id="product_id[0]"
        />
        <PricingCard
          :name="name[1]"
          :price="price[1]"
          :monthly="monthly"
          :offers="offers[1]"
          :product_id="product_id[1]"
        />
        <PricingCard
          :name="name[2]"
          :price="price[2]"
          :monthly="monthly"
          :offers="offers[2]"
          :product_id="product_id[2]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PricingCard from './PricingCard.vue'
export default {
  data() {
    return {
      name: ['Starter', 'Basic', 'Premium'],
      price: ['Free', '57', '69'],
      offers: [
        ['Flexible domain', 'Guest editors - 1'],
        [
          'Custom domain',
          'Guest editors - 3',
          'Storage space - 2 GB',
          'Customer care - 24/7',
        ],
        [
          'Custom domain',
          'Guest editors - 6',
          'Storage space - 10 GB',
          'Publish permissions',
          'Customer care - 24/7',
        ],
      ],
      product_id: [37556, 37553, 37555],
      monthly: 'monthly',
    }
  },
  components: {
    PricingCard,
  },
}
</script>
