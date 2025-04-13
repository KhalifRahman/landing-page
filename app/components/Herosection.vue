
   <template>
    <div class="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md motion-duration-[4s] intersect:motion-preset-fade motion-translate-y-out-100 motion-ease-spring-smooth">
      <div class="relative flex justify-center w-full max-w-lg mx-auto">
        <div class="absolute top-0 bg-purple-300 rounded-full opacity-50 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl animate-blob"></div>
        <div class="absolute top-0 bg-yellow-300 rounded-full opacity-50 -right-4 w-72 h-72 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div class="absolute top-0 bg-pink-300 rounded-full opacity-50 -bottom-8 left-20 w-72 h-72 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      <div class="relative z-10 max-w-4xl mx-auto text-center">
        <h3 class="mb-4 text-xl font-medium sm:text-2xl">{{ subtitle }}</h3>
        <h1 class="mb-8 text-5xl font-normal sm:text-6xl lg:text-8xl">{{ title }}</h1>
        <div class="flex justify-center">
          <div class="relative group">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <button class="relative flex items-center px-6 py-3 leading-none transition divide-x divide-gray-600 rounded-lg bg-white/10 hover:bg-white/20">
              <a :href="ctaLink" class="text-white transition duration-300">
                {{ ctaText }}
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    subtitle: String,
    ctaText: String,
    ctaLink: String
  });
  </script>