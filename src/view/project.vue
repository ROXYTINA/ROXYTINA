<template>
  <div class="min-h-screen bg-[#050505] text-white font-sans p-8 md:p-16">

    <header class="text-center max-w-2xl mx-auto mb-16">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
      <p class="text-gray-400 text-sm md:text-base leading-relaxed">
        A collection of projects I've worked on, ranging from web applications
        to mobile apps and everything in between.
      </p>
    </header>

    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
          v-for="(project, index) in projects"
          :key="index"
          class="bg-[#0a0a0a] border border-gray-800 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-colors duration-300"
      >
        <div class="h-48 overflow-hidden">
          <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>

        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
          <p class="text-gray-500 text-xs leading-relaxed mb-4">
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-2 mb-6">
            <span
                v-for="tech in project.tags"
                :key="tech"
                class="px-4 py-1 border border-gray-700 rounded-full text-[10px] text-gray-300"
            >
              {{ tech }}
            </span>
          </div>

          <div class="flex items-center gap-3">
            <button class="bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold py-2 px-6 rounded-full transition-colors flex-grow">
              View Details
            </button>
            <button class="border border-purple-500/50 p-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-purple-500/10 transition">
              <span class="text-purple-400 text-xs">🔗</span>
            </button>
            <button class="border border-purple-500/50 p-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-purple-500/10 transition">
              <span class="text-purple-400 text-xs">📂</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = Array(6).fill({
  title: 'Chat App',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor',
  image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&auto=format&fit=crop', // Purple themed placeholder
  tags: ['html', 'html', 'html', 'html']
});
</script>

<style scoped>
/* Custom font-serif to mimic the riycreatess logo if needed */
.font-serif {
  font-family: 'Georgia', serif;
}
</style>