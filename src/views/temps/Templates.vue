<template>
  <div class="parallax">
    <img class="parallax-img" src="../../assets/img/bg.png" />
    <div class="h-[90vh]">
      <ul
        class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400"
      >
        <li class="mr-2">
          <a
            href="#"
            class="inline-block py-3 px-4 text-white bg-blue-600 rounded-lg active"
            aria-current="page"
            >Tab 1</a
          >
        </li>
        <li class="mr-2">
          <a
            href="#"
            class="inline-block py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            >Tab 2</a
          >
        </li>
        <li class="mr-2">
          <a
            href="#"
            class="inline-block py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            >Tab 3</a
          >
        </li>
        <li class="mr-2">
          <a
            href="#"
            class="inline-block py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            >Tab 4</a
          >
        </li>
        <li>
          <a
            class="inline-block py-3 px-4 text-gray-400 cursor-not-allowed dark:text-gray-500"
            >Tab 5</a
          >
        </li>
      </ul>
      <div>
        <TemplateCard :template="template[0]" />
      </div>
    </div>
  </div>
</template>

<script>
import TemplateCard from './TemplateCard.vue'
export default {
  data() {
    return {
      template: [
        {
          name: 'Travel Blog',
          imgPath: 't1.png',
          description: 'Bloggers, Travel Blogs, & Lifestyle Blogs',
        },
        {
          name: 'App Landing page',
          imgPath: 't2.png',
          description: 'Applications, startups and high-tech companies',
        },
        {
          name: 'Event Venue',
          imgPath: 't3.png',
          description:
            'Concert venues, music halls, and live performance theaters',
        },
        {
          name: 'Clothing Store',
          imgPath: 't4.png',
          description:
            'Online clothing stores, fashion boutiques, and designer studios',
        },
      ],
    }
  },
  components: {
    TemplateCard,
  },
}
</script>
