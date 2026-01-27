<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const isActive = (path: string) => {
  if (path === '/') return route.path === '/'
  if (path === '/projects') return route.path === '/projects' || route.path.startsWith('/project')
  return route.path === path
}
</script>

<template>
  <!-- Navbar wrapper (keeps the original spacing and background) -->
  <div class="h-5 px-6 lg:px-40 py-10 font-inter bg-[#050505] text-white">
    <nav class="flex justify-between items-center mb-16">
      <div class="text-purple-500 font-serif italic text-2xl tracking-tighter">
        TINA
      </div>

      <div class="flex gap-6 text-sm font-medium text-gray-400">
        <router-link
          to="/"
          :class="isActive('/') ? 'text-purple-500 border-b border-purple-500 pb-1' : 'hover:text-white transition'"
        >
          Home
        </router-link>

        <router-link
          to="/projects"
          :class="isActive('/projects') ? 'text-purple-500 border-b border-purple-500 pb-1' : 'hover:text-white transition'"
        >
          Project
        </router-link>

        <router-link
          to="/about"
          :class="isActive('/about') ? 'text-purple-500 border-b border-purple-500 pb-1' : 'hover:text-white transition'"
        >
          About
        </router-link>

        <router-link
          to="/contact"
          :class="isActive('/contact') ? 'text-purple-500 border-b border-purple-500 pb-1' : 'hover:text-white transition'"
        >
          Contact
        </router-link>
      </div>
    </nav>
  </div>
</template>

<style scoped>
/* keep empty for now - layout relies on Tailwind classes used across the app */
</style>