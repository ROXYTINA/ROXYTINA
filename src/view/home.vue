<template>
  <div class="px-6 md:px-20 lg:px-40 py-10 font-inter bg-[#050505] text-white min-h-screen">

    <!-- Hero Section -->
    <section class="text-center mb-32">

      <span
          class="bg-purple-900/30 text-purple-400 px-4 py-1 rounded-full text-xs font-semibold border border-purple-500/30"
      >
        Available for New Projects
      </span>

      <h1 class="text-5xl md:text-6xl font-bold mt-6">
        Hey! I'm
        <span class="text-purple-500">
          TINA
           <img
               src="https://media.tenor.com/MNv15rLWJ7sAAAAi/tongue-stick-cat.gif"
               class="w-13 inline-block ml-2 object-contain"
           />
        </span>
      </h1>

      <p class="text-2xl text-gray-400 mt-4 font-light">Beginner Developer</p>

      <div class="mt-10 space-x-4">

        <button
            class="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full font-semibold transition shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            @click="$router.push({ name: 'Projects' })"
        >
          View My Work
        </button>


        <button
            class="border border-gray-600 hover:bg-gray-800 px-8 py-3 rounded-full font-semibold transition"
            @click="$router.push({ name: 'Contact' })"
        >
          Get In Touch
        </button>

      </div>
      
      
    </section>

    <!-- About Section -->
    <section id="about" class="grid md:grid-cols-2 gap-12 items-center mb-32">
      <div>
        <h2 class="text-3xl font-bold mb-6">About Me</h2>
        <p class="text-gray-400 leading-relaxed mb-4">
          I am a Year 4 student pursuing a degree in Communication and Information Engineering at Institute of Technology of Cambodia (ITC),
          with a strong passion for software development and emerging technologies.
          I enjoy exploring how communication systems, data, and software intersect to solve real-world problems.

        </p>
        <p class="text-gray-400 leading-relaxed">
          Alongside my studies, I am building my skills as a beginner full-stack developer,
          working with modern tools and frameworks to create practical, user-friendly applications.
          I am motivated by continuous learning, problem-solving, and the challenge of turning ideas into impactful digital solutions.
        </p>
      </div>

      <div class="flex justify-center">
          <img
              src="https://media.tenor.com/fusk7TJ28tIAAAAi/cat.gif"
              alt="decorative cat"
              class="w-65 h-65 rounded-full object-contain"
          />
      </div>
      
    </section>

    <!-- Skills Section -->
    <section id="skills" class="mb-32">
      <h2 class="text-3xl font-bold mb-10">Skills & Technologies</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div class="bg-[#111111] border border-[#222] p-6 rounded-2xl">
          <h3 class="font-bold mb-4">Frontend</h3>
          <div class="flex flex-wrap gap-2">
            <span class="bg-gray-800 text-xs px-3 py-1 rounded-full border border-gray-700">Vue.js</span>
            <span class="bg-gray-800 text-xs px-3 py-1 rounded-full border border-gray-700">tailwind CSS</span>
            <span class="bg-gray-800 text-xs px-3 py-1 rounded-full border border-gray-700">Responsive Web design</span>
          </div>
        </div>

        <div class="bg-[#111111] border border-[#222] p-6 rounded-2xl">
          <h3 class="font-bold mb-4">Database</h3>
          <div class="flex flex-wrap gap-2">
            <span class="bg-gray-800 text-xs px-3 py-1 rounded-full border border-gray-700">MySQL</span>
            <span class="bg-gray-800 text-xs px-3 py-1 rounded-full border border-gray-700">Supabase</span>
            <span class="bg-gray-800 text-xs px-3 py-1 rounded-full border border-gray-700">PostgreSQL</span>
            <span class="bg-gray-800 text-xs px-3 py-1 rounded-full border border-gray-700">MongoDB</span>
          </div>
        </div>

        <div class="bg-[#111111] border border-[#222] p-6 rounded-2xl">
          <h3 class="font-bold mb-4">Backend</h3>
          <div class="flex flex-wrap gap-2">
            <span class="bg-gray-800 text-xs px-3 py-1 rounded-full border border-gray-700">Node.js</span>
            <span class="bg-gray-800 text-xs px-3 py-1 rounded-full border border-gray-700">Express.js</span>
            <span class="bg-gray-800 text-xs px-3 py-1 rounded-full border border-gray-700">SpringBoot (beginner)</span>

          </div>
        </div>


      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="mb-32">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4">My Projects</h2>
        <p class="text-gray-400">A collection of research papers and web applications.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(p, idx) in projects"
          :key="idx"
          class="bg-[#111111] border border-[#222] overflow-hidden rounded-3xl group transition hover:border-purple-500/50"
        >
          <div class="h-48 bg-gradient-to-br from-purple-900 to-indigo-900 flex items-center justify-center">
            <span class="text-4xl opacity-50">{{ p.emoji }}</span>
          </div>

          <div class="p-6">
            <h3 class="font-bold text-xl mb-2">{{ p.title }}</h3>
            <p class="text-gray-400 text-sm mb-4">{{ p.description }}</p>

            <div class="flex gap-2 mb-6">
              <span
                v-for="(t, i) in p.tags"
                :key="i"
                class="text-[10px] bg-gray-800 px-2 py-1 rounded border border-gray-700"
              >
                {{ t }}
              </span>
            </div>

            <button class="w-full py-2 bg-purple-600 rounded-xl text-sm font-semibold hover:bg-purple-700 transition">
              View Project
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="grid md:grid-cols-2 gap-12 mb-20">

      <div>


        <h2 class="text-4xl font-bold mb-6">Let's Work Together</h2>
        <p class="text-gray-400 mb-8">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>



        <div class="space-y-4">
          <div class="flex gap-4">
            <a
                href="https://www.linkedin.com/in/sreng-sopheakanha-58a5b2296/"
                target="_blank"
                rel="noopener noreferrer"
                class="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full transition-all inline-block grayscale opacity-70 hover:grayscale-0 hover:opacity-100"
                aria-label="LinkedIn"
            >
              LinkedIn
            </a>

            <a
                href="https://github.com/ROXYTINA"
                target="_blank"
                rel="noopener noreferrer"
                class="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full transition-all inline-block grayscale opacity-70 hover:grayscale-0 hover:opacity-100"
                aria-label="Github"
            >
              Github
            </a>

            <a
                href="https://www.instagram.com/baby_pxndx/"
                target="_blank"
                rel="noopener noreferrer"
                class="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full transition-all inline-block grayscale opacity-70 hover:grayscale-0 hover:opacity-100"
                aria-label="Instagram"
            >
              Instagram
            </a>

            <a
                href="https://mail.google.com/mail/?view=cm&to=Kanharoth12345@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                class="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full transition-all inline-block grayscale opacity-70 hover:grayscale-0 hover:opacity-100"
                aria-label="Gmail"
            >
              Gmail
            </a>

          </div>

        </div>


      </div>


      <div class="bg-[#111111] border border-purple-500/20 p-8 rounded-3xl">

        <form class="space-y-4" @submit.prevent="handleSubmit">
          <input
              v-model="form.name"
              type="text"
              placeholder="Name"
              class="w-full bg-black border border-gray-800 rounded-xl p-3 focus:outline-none focus:border-purple-500"
          />

          <input
              v-model="form.email"
              type="email"
              placeholder="Email"
              class="w-full bg-black border border-gray-800 rounded-xl p-3 focus:outline-none focus:border-purple-500"
          />

          <textarea
              v-model="form.message"
              placeholder="Message"
              rows="4"
              class="w-full bg-black border border-gray-800 rounded-xl p-3 focus:outline-none focus:border-purple-500"
          ></textarea>

          <button
              type="submit"
              :disabled="sending"
              class="w-full py-3 bg-purple-600 rounded-xl font-bold hover:bg-purple-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span v-if="sending">Sending…</span>
            <span v-else>Send Message</span>
          </button>

          <p v-if="status" :class="statusClass">{{ status }}</p>
        </form>

      </div>



    </section>

  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

// Projects data moved into the script for easy editing
const projects = [
  {
    title: 'Predictive Analytics Model',
    description: 'Time-series forecasting using LSTM networks for financial market analysis.',
    tags: ['Python', 'TensorFlow'],
    emoji: '📊'
  },
  {
    title: 'Portfolio Redesign',
    description: 'A modern, responsive portfolio built with Vue and Tailwind to showcase projects and case studies.',
    tags: ['Vue.js', 'Tailwind CSS'],
    emoji: '🎨'
  },
  {
    title: 'E-commerce UI',
    description: 'Design and prototype for a performant e-commerce storefront with accessible components.',
    tags: ['UI/UX', 'Figma'],
    emoji: '🛍️'
  }
]

const form = reactive({
  name: '',
  email: '',
  message: ''
})

// sending state and status message
const sending = ref(false)
const status = ref('')
const statusClass = ref('text-sm mt-2 text-green-400')

// Replace these with values from your EmailJS account:
// 1) service_id  2) template_id  3) user_id (or public key)
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_USER_ID = 'YOUR_USER_ID_OR_PUBLIC_KEY'

// template parameters mapping — adjust template variable names in EmailJS if needed
const buildTemplateParams = (f) => ({
  from_name: f.name,
  from_email: f.email,
  message: f.message,
  // optional: hard-code receiver email in template or pass as param
  to_email: 'Kanharoth12345@gmail.com'
})

const handleSubmit = async () => {
  // basic validation
  if (!form.name || !form.email || !form.message) {
    status.value = 'Please fill all fields.'
    statusClass.value = 'text-sm mt-2 text-yellow-400'
    return
  }

  sending.value = true
  status.value = ''
  statusClass.value = 'text-sm mt-2 text-green-400'

  try {
    const payload = {
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_USER_ID,
      template_params: buildTemplateParams(form)
    }

    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    if (!res.ok) {
      const text = await res.text()
      // don't throw — surface the failure to the UI and return
      status.value = (text && text.length < 300) ? `EmailJS error: ${text}` : 'EmailJS request failed'
      statusClass.value = 'text-sm mt-2 text-red-400'
      sending.value = false
      return
    }

    status.value = 'Message sent — thank you!'
    statusClass.value = 'text-sm mt-2 text-green-400'
    // clear form
    form.name = ''
    form.email = ''
    form.message = ''
  } catch (err) {
    console.error(err)
    status.value = 'Failed to send message. Configure EmailJS or try the mail client fallback.'
    statusClass.value = 'text-sm mt-2 text-red-400'
  } finally {
    sending.value = false
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

.font-inter {
  font-family: 'Inter', sans-serif;
}
</style>
