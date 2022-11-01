<template>
  <div
    class="p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700"
  >
    <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
      {{ card.name }}
    </h5>
    <div class="flex items-baseline text-gray-900 dark:text-white">
      <span class="text-3xl font-semibold">$</span>
      <span class="text-5xl font-extrabold tracking-tight">
        {{ card.price }}</span
      >
      <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400"
        >/monthly</span
      >
    </div>
    <!-- List -->
    <ul role="list" class="my-7 space-y-5">
      <li v-for="offer in card.offers" class="flex space-x-3">
        <!-- Icon -->
        <svg
          aria-hidden="true"
          class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Check icon</title>
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span
          class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
          >{{ offer }}</span
        >
      </li>

      <li
        v-for="offer in card.inactiveOffers"
        class="flex space-x-3 line-through decoration-gray-500"
      >
        <!-- Icon -->
        <svg
          aria-hidden="true"
          class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Check icon</title>
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="text-base font-normal leading-tight text-gray-500">
          {{ offer }}</span
        >
      </li>
    </ul>
    <button
      type="button"
      class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
    >
      <a
        href="#!"
        class="paddle_button"
        data-theme="none"
        :data-product="card.product_id"
        >Choose plan</a
      >
    </button>
  </div>
</template>
<script>
export default {
  props: ['card'],
}
</script>
