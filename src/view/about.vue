<script setup lang="ts">
const skills = {
  frontend: [
    'Vue.js (Composition API & Vue Router)',
    'TypeScript',
    'Tailwind CSS & utility-first styling',
    'Responsive & accessible UI',
    'Component-driven architecture'
  ],
  backend: [
    'Node.js & Express (basic APIs)',
    'REST principles and JSON APIs',
    'Introduction to Spring Boot',
    'Authentication (JWT) and session management (conceptual)'
  ],
  database: [
    'MySQL & PostgreSQL (schema design, queries)',
    'Supabase (auth + Postgres)',
    'Basic MongoDB usage for document storage'
  ],
  tools: [
    'Git & GitHub',
    'Vite / npm',
    'VS Code',
    'Chrome DevTools'
  ]
}

const education = {
  degree: 'B.Eng. in Communication and Information Engineering',
  school: 'Institute of Technology of Cambodia (ITC)',
  year: 'Year 4 (expected graduation TBD)',
  highlights: [
    'Courses in data communication, signal processing, and networking',
    'Hands-on projects combining software and communication systems',
    'Strong foundation in problem solving and engineering principles'
  ]
}
</script>

<template>
  <div class="px-6 md:px-20 lg:px-40 py-10 font-inter bg-[#050505] text-white min-h-screen">
    <section class="text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
      <p class="text-gray-400 mt-4 text-lg max-w-3xl mx-auto">
        Hi — I'm <span class="text-purple-500 font-semibold">TINA</span>, a Year 4 student studying
        Communication and Information Engineering at the Institute of Technology of Cambodia (ITC).
        I build practical web experiences and learning full‑stack development with a focus on clean,
        maintainable code and accessible interfaces.
      </p>
    </section>

    <section class="grid md:grid-cols-2 gap-12 items-start mb-16">
      <div class="bg-[#111111] border border-[#222] p-8 rounded-3xl">
        <h2 class="text-2xl font-bold mb-4">Education</h2>
        <p class="text-gray-300 font-semibold">{{ education.degree }}</p>
        <p class="text-gray-400">{{ education.school }} — {{ education.year }}</p>

        <ul class="mt-4 text-gray-400 list-disc list-inside space-y-2">
          <li v-for="(h, i) in education.highlights" :key="i">{{ h }}</li>
        </ul>

        <div class="mt-6">
          <h3 class="text-white font-semibold mb-2">Selected academic projects</h3>
          <ul class="text-gray-400 list-disc list-inside space-y-2">
            <li>Communication systems mini-project — implemented a basic signal processing pipeline.</li>
            <li>Database design assignment — relational modelling and query optimization.</li>
            <li>Team web app project — full-stack proof-of-concept with authentication.</li>
          </ul>
        </div>
      </div>

      <div class="bg-[#111111] border border-[#222] p-8 rounded-3xl">
        <h2 class="text-2xl font-bold mb-4">Summary</h2>
        <p class="text-gray-400 leading-relaxed">
          I enjoy turning ideas into working products. My current focus is on becoming a reliable
          generalist: strong front-end skills with a steadily growing knowledge of back-end systems
          and databases. I like to learn by building small apps and iterating quickly.
        </p>

        <div class="mt-6">
          <h3 class="text-white font-semibold mb-2">What I care about</h3>
          <ul class="text-gray-400 list-disc list-inside space-y-2">
            <li>Readable, maintainable code and clear component boundaries.</li>
            <li>Accessible user experiences that work across devices.</li>
            <li>Continuous learning — reading docs, following tutorials, and building.</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="skills" class="mb-20">
      <h2 class="text-3xl font-bold mb-8 text-center">Skills & Technologies</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-[#111111] border border-[#222] p-6 rounded-2xl">
          <h3 class="font-bold mb-4">Frontend</h3>
          <ul class="text-gray-400 list-disc list-inside space-y-2">
            <li v-for="(s, i) in skills.frontend" :key="'fe-'+i">{{ s }}</li>
          </ul>
        </div>

        <div class="bg-[#111111] border border-[#222] p-6 rounded-2xl">
          <h3 class="font-bold mb-4">Database</h3>
          <ul class="text-gray-400 list-disc list-inside space-y-2">
            <li v-for="(s, i) in skills.database" :key="'db-'+i">{{ s }}</li>
          </ul>
        </div>

        <div class="bg-[#111111] border border-[#222] p-6 rounded-2xl">
          <h3 class="font-bold mb-4">Backend & Tools</h3>
          <ul class="text-gray-400 list-disc list-inside space-y-2">
            <li v-for="(s, i) in skills.backend" :key="'be-'+i">{{ s }}</li>
            <li v-for="(t, j) in skills.tools" :key="'tool-'+j">{{ t }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="text-center mb-12">
      <h2 class="text-2xl font-bold mb-4">Interested in working together?</h2>
      <p class="text-gray-400 mb-6">I’m available for freelance projects, collaborations, and internships.</p>
      <div class="space-x-4">
        <button
          class="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full font-semibold transition shadow-[0_0_20px_rgba(139,92,246,0.3)]"
          @click="$router.push({ name: 'Projects' })"
        >
          View my work
        </button>

        <button
          class="border border-gray-600 hover:bg-gray-800 px-8 py-3 rounded-full font-semibold transition"
          @click="$router.push({ name: 'Contact' })"
        >
          Contact me
        </button>
      </div>
    </section>

  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

.font-inter { font-family: 'Inter', sans-serif; }
</style>