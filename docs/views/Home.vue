<template>
  <div class="home">
    <h1>My Vue3 UI</h1>
    <p>一个现代化的 Vue 3 组件库</p>
    
    <h2>特性</h2>
    <ul>
      <li>🚀 基于 Vue 3 和 TypeScript</li>
      <li>📦 支持按需引入</li>
      <li>🎨 现代化的设计风格</li>
      <li>💪 完整的类型定义</li>
    </ul>

    <h2>安装</h2>
    <pre><code class="language-bash">npm install my-vue3-ui</code></pre>

    <h2>快速开始</h2>
    <pre><code class="language-typescript">import { createApp } from 'vue'
import MyVue3UI from 'my-vue3-ui'
import 'my-vue3-ui/dist/style.css'

const app = createApp(App)
app.use(MyVue3UI)
app.mount('#app')</code></pre>
  </div>
</template>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

h2 {
  margin-top: 2rem;
  margin-bottom: 1rem;
}

ul {
  list-style: none;
  padding-left: 0;
}

li {
  margin: 0.5rem 0;
}

pre {
  background: #f6f8fa;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
}
</style>