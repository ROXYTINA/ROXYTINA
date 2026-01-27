<script setup lang="ts">
import { ref } from 'vue';

type Link = { label: string; url: string };
const props = defineProps<{
  links?: Link[];
  year?: number;
}>();


const year = props.year ?? new Date().getFullYear();

// Newsletter state
const email = ref('');
const subscribing = ref(false);
const subscribed = ref(false);
const error = ref('');

function validateEmail(v: string) {
  return /^\S+@\S+\.\S+$/.test(v);
}

</script>

<template>
  <footer class="site-footer" role="contentinfo">
    <div class="container">
      <div class="brand">
        <div class="color-white font-bold font">TINA</div>
      </div>
      <div class="meta">
        <div class="socials" aria-label="Social links">
          <a class="icon" href="https://github.com/ROXYTINA" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5C5.7.5.9 5.3.9 11.6c0 4.7 3 8.6 7.2 10 .5.1.7-.2.7-.5v-1.7c-2.9.6-3.5-1.4-3.5-1.4-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.6 1.1 1.6 1.1 1 .1 1.7-.8 2.1-1.3-.7-.1-1.4-.3-1.9-.7-1.6-.8-.1-1.6.1-1.6 1.9.2 3.2 1.9 3.2 1.9 1 .1 1.8.7 2.3 1.2.1-.8.4-1.5.7-2-2.3-.3-4.7-1.2-4.7-5.4 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3 .1.9-.3 1.9-.5 2.9-.5 1 0 2 .2 2.9.5 2.1-.4 3-.1 3-.1.6 1.6.2 2.8.1 3.1.7.8 1.1 1.8 1.1 3 0 4.2-2.4 5.1-4.7 5.4.4.4.8 1 .8 2v3c0 .3.2.6.7.5 4.2-1.4 7.2-5.3 7.2-10C23.1 5.3 18.3.5 12 .5z"/></svg>
          </a>

          <a class="icon" href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5C4.98 5 3.77 6.2 2.25 6.2S-.5 5 .5 3.5 1.73 .8 3.25 .8 4.98 2 4.98 3.5zM.5 8.98h4.5V24H.5V8.98zM9.5 8.98h4.3v2.1h.1c.6-1.1 2.2-2.3 4.6-2.3 4.9 0 5.8 3.3 5.8 7.6V24h-4.5v-7.1c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V24H9.5V8.98z"/></svg>
          </a>
        </div>

      </div>

      <div class="copyright">© {{ year }} ROXYTINA</div>
    </div>


  </footer>
</template>

<style scoped>
.site-footer {
  background: linear-gradient(180deg,#071027,#0f1724);
  color: #e6eef8;
  padding: 2rem 1rem;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  font-size: 14px;
  display:flex;
  justify-content:center;
  align-items:center;
}

.container {
  max-width: 980px;
  width:100%;
  margin: 0 auto;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center; /* center horizontally */
  flex-direction: column; /* stack vertically */
  text-align: center; /* center text */
  padding: 1.25rem;
  background: rgba(255,255,255,0.02);
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.03);
}

/* Brand */
.brand {
  display:flex;
  flex-direction:column;
  align-items:center; /* center brand */
}
.logo {
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 0.04em;
}
.tag {
  color: #9fb0c8;
  font-size: 0.85rem;
  margin-top: 4px;
}

/* Divider decorative */
.divider{
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg,#7dd3fc,#a78bfa);
  border-radius:3px;
  margin: 8px 0 12px;
}

/* Links */
.links{
  display:flex;
  gap:0.6rem;
  justify-content:center;
  flex-wrap:wrap;
}
.footer-link{
  color: #dfeffc;
  text-decoration:none;
  padding:6px 10px;
  border-radius:999px;
  background: rgba(255,255,255,0.01);
  transition: transform 0.12s, background 0.12s;
}
.footer-link:hover{ transform: translateY(-4px); background: rgba(125,211,252,0.08); }

/* Newsletter */
.newsletter .form{ display:flex; gap:0.5rem; margin-top:10px; justify-content:center; }
.newsletter input[type="email"]{ padding:0.5rem 0.75rem; border-radius:8px; border:1px solid rgba(255,255,255,0.04); background: transparent; color:inherit; outline:none; }
.newsletter .btn{ padding:0.5rem 0.8rem; border-radius:8px; border:none; background: linear-gradient(90deg,#7dd3fc,#a78bfa); color:#041025; font-weight:600; cursor:pointer; }
.newsletter .note{ margin-top:6px; font-size:0.85rem; color:#98a9bf; }
.success{ color:#bce7c7; }
.error{ color:#ffb4b4; }

/* Meta */
.meta{ display:flex; gap:1rem; align-items:center; justify-content:center; flex-direction:column; margin-top:12px; }
.socials{ display:flex; gap:0.5rem; }
.icon{ display:inline-flex; width:36px; height:36px; align-items:center; justify-content:center; background: rgba(255,255,255,0.03); border-radius:6px; transition: transform 0.16s; }
.icon:hover{ transform: translateY(-6px); }
.icon svg{ width:18px; height:18px; fill:currentColor; }
.contact a{ color:#dfeffc; text-decoration:underline; }

.copyright{ margin-top:10px; color:#9fb0c8; }

.to-top{ position: fixed; right:18px; bottom:18px; width:44px; height:44px; border-radius:999px; border:none; background: linear-gradient(90deg,#7dd3fc,#a78bfa); color:#041025; font-weight:700; cursor:pointer; box-shadow:0 6px 20px rgba(3,6,15,0.6); }

@media (max-width:600px){
  .container{ padding:0.85rem; }
  .newsletter .form{ flex-direction:column; }
  .newsletter .btn{ width:100%; }
}
</style>
