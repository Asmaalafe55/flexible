<template>
  <div class="flex justify-center font-poppins">
    <div class="bg-[#013565] w-full h-[800px] space-y-11">
      <div class="pricingTxt">Pricing</div>
      <div class="flex justify-center space-x-11">
        <div v-for="card in cardDetails">
          <PricingCard :card="card" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PricingCard from './PricingCard.vue'
export default {
  data() {
    return {
      cardDetails: [
        {
          name: 'Starter',
          price: '18',
          offers: ['2 team members', '10GB Cloud storage', 'Integration help'],
          inactiveOffers: [
            'Sketch Files',
            'API Access',
            'Complete documentation',
            '24×7 phone & email support',
          ],
          product_id: 37556,
        },
        {
          name: 'Basic',
          price: '57',
          offers: [
            '4 team members',
            '20GB Cloud storage',
            'Integration help',
            'Sketch Files',
            'API Access',
          ],
          inactiveOffers: [
            'Complete documentation',
            '24×7 phone & email support',
          ],
          product_id: 37553,
        },
        {
          name: 'Premium',
          price: '69',
          offers: [
            '8 team members',
            '40GB Cloud storage',
            'Integration help',
            'Sketch Files',
            'API Access',
            'Complete documentation',
            '24×7 phone & email support',
          ],
          inactiveOffers: [],
          product_id: 37555,
        },
      ],
    }
  },
  components: {
    PricingCard,
  },
}
</script>
