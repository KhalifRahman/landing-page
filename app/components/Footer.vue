  <template>
    <footer class="container px-4 py-8 mx-auto text-center sm:px-6 lg:px-8 intersect:motion-preset-fade">
      <h2 class="text-sm sm:text-base">{{ footerText }}</h2>
    </footer>
  </template>
  
  <script setup>
  defineProps({
    footerText: String
  });
  </script>