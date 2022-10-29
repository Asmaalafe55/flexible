<template>
  <div id="default-carousel" class="relative" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative w-[40vw] overflow-hidden rounded-lg md:h-[50vh]">
      <div
        class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
        data-carousel-item=""
        v-for="(item, index) in images"
        :key="index"
      >
        <img
          :src="item.url"
          alt=""
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          :placeholder="item.placeHolder"
        />
      </div>
    </div>
    <!-- Slider indicators -->
    <div
      class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-[-20px] left-1/2"
    >
      <button
        v-for="(item, index) in images"
        type="button"
        class="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
        :aria-current="index === 0 ? 'true' : 'false'"
        :aria-label="item.placeHolder"
        :data-carousel-slide-to="index"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          url: 'https://bootstrapmade.com/content/templatefiles/Yummy/Yummy-bootstrap-website-template.png',
          placeHolder: 'First Slide',
        },
        {
          url: 'https://colorlib.com/wp/wp-content/uploads/sites/2/mahabis-creative-shoe-store.jpg',
          placeHolder: 'Second Slide',
        },
        {
          url: 'https://agentestudio.com/uploads/ckeditor/pictures/1687/blog-design-19.png',
          placeHolder: 'Third Slide',
        },
      ],
    }
  },
}
</script>
