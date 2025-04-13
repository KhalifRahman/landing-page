   <template>
    <div class="container px-4 py-12 mx-auto sm:px-6 lg:px-8 sm:py-16 lg:py-20 intersect:motion-preset-fade" id="project">
      <h1 class="mb-12 text-3xl font-bold text-left sm:text-4xl lg:text-5xl intersect:motion-preset-slide-up motion-delay-0">Projects</h1>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 intersect:motion-preset-slide-up motion-delay-100">
        <div class="overflow-hidden bg-white shadow-lg rounded-xl">
          <div class="flex flex-col">
            <div class="overflow-hidden rounded-t-xl">
              <NuxtLink :to="projectLink1">
                <img :src="projectImage1" alt="Project 1 Image" class="object-cover w-full transition-transform duration-300 h-80 hover:scale-105" />
              </NuxtLink>
            </div>
            <div class="p-6">
              <h2 class="mb-3 text-xl font-semibold">{{ projectTitle1 }}</h2>
              <p class="mb-4 text-gray-600">{{ projectDescription1 }}</p>
              <NuxtLink :to="projectLink1" class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white transition-colors duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                See More
              </NuxtLink>
            </div>
          </div>
        </div>
  
        <div class="overflow-hidden bg-white shadow-lg rounded-xl ">
          <div class="flex flex-col">
            <div class="overflow-hidden rounded-t-xl">
              <NuxtLink :to="projectLink2">
                <img :src="projectImage2" alt="Project 2 Image" class="object-cover w-full transition-transform duration-300 h-80 hover:scale-105" />
              </NuxtLink>
            </div>
            <div class="p-6">
              <h2 class="mb-3 text-xl font-semibold">{{ projectTitle2 }}</h2>
              <p class="mb-4 text-gray-600">{{ projectDescription2 }}</p>
              <NuxtLink :to="projectLink2" class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white transition-colors duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                See More
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    projectLink1: String,
    projectImage1: String,
    projectTitle1: String,
    projectDescription1: String,
    projectLink2: String,
    projectImage2: String,
    projectTitle2: String,
    projectDescription2: String,
  });
  </script>