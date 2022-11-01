<template>
  <div class="parallax">
    <img class="parallax-img" src="../../assets/img/bg.png" />
    <div class="min-h-screen">
      <div class="relative sm:rounded-lg">
        <div class="flex justify-between items-center h-16 m-2 mx-4">
          <div class="flex space-x-2">
            <button
              id="dropdownCheckboxButton"
              data-dropdown-toggle="dropdownDefaultCheckbox"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Dropdown checkbox
              <svg
                class="ml-2 w-4 h-4"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            <!-- Dropdown menu -->
            <div
              id="dropdownDefaultCheckbox"
              class="hidden z-10 w-48 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              data-popper-reference-hidden=""
              data-popper-escaped=""
              data-popper-placement="bottom"
              style="
                position: absolute;
                inset: 0px auto auto 0px;
                margin: 0px;
                transform: translate3d(0px, 320px, 0px);
              "
            >
              <ul
                class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownCheckboxButton"
              >
                <li v-for="check in filter1">
                  <div class="flex items-center">
                    <input
                      :id="check.title"
                      type="checkbox"
                      :value="check"
                      v-model="check.checked"
                      class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      :for="check.title"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >{{ check.title }}</label
                    >
                  </div>
                </li>
              </ul>
            </div>
            <!-- ////////////////////// -->

            <button
              id="dropdownRadioButton"
              data-dropdown-toggle="dropdownDefaultRadio"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Dropdown radio
              <svg
                class="ml-2 w-4 h-4"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            <!-- Dropdown menu -->
            <div
              id="dropdownDefaultRadio"
              class="hidden z-10 w-48 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              data-popper-reference-hidden=""
              data-popper-escaped=""
              data-popper-placement="bottom"
              style="
                position: absolute;
                inset: 0px auto auto 0px;
                margin: 0px;
                transform: translate3d(0px, 320px, 0px);
              "
            >
              <div
                class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownRadioButton"
              >
                <ul>
                  <li v-for="radio in filter2">
                    <div class="flex items-center">
                      <input
                        type="radio"
                        :id="radio.title"
                        :value="radio"
                        v-model="radioButton"
                        name="default-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        :for="radio.title"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >{{ radio.title }}</label
                      >
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Search -->
          <div class="relative">
            <div
              class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
            >
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              v-model="search"
              class="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for templates"
            />
          </div>
          <!-- searched: {{ search }} Radio: {{ radioButton.title }} checkbox:
          {{ filter1[0].checked }} -->
        </div>
      </div>
      <div class="grid grid-cols-4 gap-6 mx-6">
        <div v-for="temp in template">
          <TemplateCard :template="temp" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TemplateCard from './TemplateCard.vue'
export default {
  data() {
    return {
      filter1: [
        { title: 'checkbox1', checked: false },
        { title: 'checkbox2', checked: false },
        { title: 'checkbox3', checked: false },
      ],
      filter2: [{ title: 'redio1' }, { title: 'redio2' }, { title: 'redio3' }],
      radioButton: '',
      search: '',
      template: [
        {
          name: 'Travel Blog',
          imgPath: 't1.png',
          keywords: ['travel', 'blog', 'vacation', 'lifestyle', 'personal'],
          description: 'Bloggers, Travel Blogs, & Lifestyle Blogs',
        },
        {
          name: 'App Landing page',
          imgPath: 't2.png',
          keywords: ['apps'],
          description: 'Applications, startups and high-tech companies',
        },
        {
          name: 'Event Venue',
          imgPath: 't3.png',
          keywords: ['events'],
          description:
            'Concert venues, music halls, and live performance theaters',
        },
        {
          name: 'Clothing Store',
          imgPath: 't4.png',
          keywords: ['clothing', 'store', 'outfit'],
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
