<template>
  <div class="min-h-screen bg-[#050505] text-white font-sans p-8 md:p-16">

    <h1 class="text-4xl md:text-5xl font-bold text-center mb-12">Let's Work Together</h1>

    <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

      <section class="border border-purple-900/50 bg-[#0a0a0a] p-8 rounded-2xl">
        <h2 class="text-xl font-semibold mb-6">Send me a message</h2>
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label class="block text-sm mb-2">Name</label>
            <input type="text" class="w-full bg-black border border-purple-900/50 rounded-xl p-3 focus:outline-none focus:border-purple-500 transition" />
          </div>
          <div>
            <label class="block text-sm mb-2">Email</label>
            <input type="email" class="w-full bg-black border border-purple-900/50 rounded-xl p-3 focus:outline-none focus:border-purple-500 transition" />
          </div>
          <div>
            <label class="block text-sm mb-2">Message</label>
            <textarea rows="4" class="w-full bg-black border border-purple-900/50 rounded-xl p-3 focus:outline-none focus:border-purple-500 transition"></textarea>
          </div>
          <button type="submit" class="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 rounded-xl transition">
            Send Message
          </button>
        </form>
      </section>

      <div class="flex flex-col gap-8">
        <section class="border border-purple-900/50 bg-[#0a0a0a] p-8 rounded-2xl">
          <p class="text-gray-300 leading-relaxed mb-6">
            I'm always open to new opportunities and partnerships. Whether you have a specific project in mind or just want to explore possibilities, I'd love to connect.
          </p>
          <ul class="space-y-2 text-gray-200">
            <li class="flex items-center gap-2">
              <span class="text-purple-500">•</span> Web & Mobile Development
            </li>
            <li class="flex items-center gap-2">
              <span class="text-purple-500">•</span> UI/UX Design
            </li>
            <li class="flex items-center gap-2">
              <span class="text-purple-500">•</span> Technical Consulting
            </li>
            <li class="flex items-center gap-2">
              <span class="text-purple-500">•</span> Speaking & Workshops
            </li>
          </ul>
        </section>

        <section class="border border-purple-900/50 bg-[#0a0a0a] p-8 rounded-2xl">
          <h3 class="text-sm font-semibold mb-4 text-gray-400 uppercase tracking-widest">My Socials</h3>
          <div class="flex gap-6">
            <a href="#" class="text-purple-500 hover:text-white transition text-2xl">📸</a>
            <a href="#" class="text-purple-500 hover:text-white transition text-2xl">✉️</a>
            <a href="#" class="text-purple-500 hover:text-white transition text-2xl">𝕏</a>
            <a href="#" class="text-purple-500 hover:text-white transition text-2xl">in</a>
            <a href="#" class="text-purple-500 hover:text-white transition text-2xl">▶️</a>
          </div>
        </section>
      </div>

    </div>
  </div>
</template>

<script setup>
const handleSubmit = () => {
  alert('Message sent successfully!');
};
</script>