<template>
  <div class="parallax">
    <img class="parallax-img" src="../../assets/img/bg.png" />
    <div class="min-h-screen">
      <div class="relative sm:rounded-lg">
        <div class="flex justify-between items-center h-16 m-2 ml-14 mx-8">
          <div class="flex space-x-2">
            <button
              id="dropdownCheckboxButton"
              data-dropdown-toggle="dropdownDefaultCheckbox"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
              type="button"
            >
              Filter
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
              class="hidden z-10 w-48 bg-white rounded divide-y divide-gray-100 shadow"
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
                class="p-3 space-y-3 text-sm text-gray-700"
                aria-labelledby="dropdownCheckboxButton"
              >
                <li v-for="check in dropdown">
                  <div class="flex items-center">
                    <input
                      :id="check"
                      type="checkbox"
                      :value="check"
                      v-model="checkboxSelected"
                      name="default-checkbox"
                      class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <label
                      :for="check"
                      class="ml-2 text-sm font-medium text-gray-900"
                      >{{ check }}</label
                    >
                  </div>
                </li>
              </ul>
            </div>

            <button
              type="button"
              @click="clearButton"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
            >
              clear
            </button>
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
              class="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for templates"
            />
          </div>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-4 mx-6">
        <div v-for="temp in filtered">
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
      dropdown: [
        'blog',
        'store',
        'app',
        'travel',
        'photograph',
        'homepage',
        'portfolio',
        'photos',
        'films',
        'liefstyle',
        'makeup',
        'clothing',
        'eCommerce',
        'fashion',
        'shop',
        'accessories',
        'business',
        'investing',
        'event',
        'music',
        'graphic designers',
        'application',
        'startup',
        'creative',
        'company',
      ],
      url: 'http://localhost:4000/api/templates',
      checkboxSelected: [],
      search: '',
      template: [],
    }
  },
  methods: {
    clearButton() {
      this.search = ''
      this.checkboxSelected = []
    },
  },
  async created() {
    const response = await fetch(this.url)
    this.template = await response.json()
  },

  computed: {
    filtered() {
      return this.template.filter((temp) => {
        if (
          !temp.template_description
            .toLowerCase()
            .includes(this.search.toLowerCase())
        ) {
          return false
        }

        if (
          !temp.template_name.toLowerCase().includes(this.search.toLowerCase())
        ) {
          return false
        }

        if (
          !temp.template_keywords.some(
            (word) => this.checkboxSelected.indexOf(word) >= 0
          ) &&
          this.checkboxSelected.length
        ) {
          return false
        }
        return true
      })
    },
  },
  components: {
    TemplateCard,
  },
}
</script>
