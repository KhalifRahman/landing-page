   <template>
    <div class="relative w-full overflow-hidden" :id="id">
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <div class="container px-4 py-12 mx-auto sm:px-6 lg:px-24 sm:py-16 lg:py-20">
        <h1 class="mb-12 text-3xl font-bold text-left sm:text-4xl lg:text-5xl intersect:motion-preset-slide-up motion-delay-400">About Me</h1>
        
        <div class="flex flex-col items-center gap-8 mb-16 lg:flex-row lg:gap-16 lg:mb-24 intersect:motion-preset-slide-up motion-delay-400 ">
          <img 
            :src="image" 
            alt="Profile Image" 
            class="object-cover w-48 h-48 transition-shadow duration-300 rounded-full shadow-lg sm:w-60 sm:h-60 hover:shadow-xl"
          />
          <div class="text-center lg:text-left">
            <h2 class="mb-4 text-2xl font-semibold sm:text-3xl">{{ name }}</h2>
            <p class="max-w-2xl mb-6 text-base text-gray-700 sm:text-lg">{{ description }}</p>
            <NuxtLink 
              to="https://wa.me/6289633472175" 
              class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white transition-colors bg-gray-900 rounded-lg duration-0 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              <Icon name="ri:whatsapp-fill" class="w-5 h-5 mr-2" />
              Contact Me
            </NuxtLink>
          </div>
        </div>
  
        <div class="flex flex-col items-start gap-8 mb-16 lg:flex-row lg:gap-16 lg:mb-24 intersect:motion-preset-slide-up motion-delay-400">
          <div class="flex-1">
            <h2 class="mb-4 text-2xl font-semibold sm:text-3xl">Education</h2>
            <p class="mb-4 font-medium text-gray-700">{{ school }}</p>
            <ul class="space-y-2 text-gray-600 list-disc list-inside">
              <li v-for="(item, index) in details" :key="index" class="text-base sm:text-lg">
                {{ item }}
              </li>
            </ul>
          </div>
          <img 
            :src="schoolImage" 
            alt="School Image" 
            class="object-cover w-full h-auto transition-shadow duration-300 shadow-lg lg:w-96 rounded-xl hover:shadow-xl"
          />
        </div>
  
        <div class="flex flex-col-reverse items-start gap-8 lg:flex-row lg:gap-16 intersect:motion-preset-slide-up motion-delay-400">
          <img 
            :src="skillsImage" 
            alt="Skills Image" 
            class="object-cover w-full h-auto transition-shadow duration-300 shadow-lg lg:w-96 rounded-xl hover:shadow-xl"
          />
          <div class="flex-1">
            <h2 class="mb-4 text-2xl font-semibold sm:text-3xl">Skills</h2>
            <ul class="space-y-2 text-gray-600 list-disc list-inside">
              <li v-for="(item, index) in skillsDescription" :key="index" class="text-base sm:text-lg">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    id: String,
    name: String,
    image: String,
    description: String,
    school: String,
    skills: String,
    skillsDescription: {
      type: Array,
      default: () => []
    },
    details: {
      type: Array,
      default: () => []
    },
    skillsImage: String,
    schoolImage: String
  });
  </script>