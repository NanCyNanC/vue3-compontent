<template>
  <div class="docs-app">
    <aside class="docs-sidebar">
      <div class="sidebar-header">
        <h1>My Vue3 UI</h1>
      </div>
      <nav class="sidebar-menu">
        <router-link to="/" class="menu-item">介绍</router-link>
        <div class="menu-group">
          <div class="menu-group-title">基础组件</div>
          <router-link to="/components/button" class="menu-item">Button 按钮</router-link>
          <router-link to="/components/input" class="menu-item">Input 输入框</router-link>
          <router-link to="/components/tag" class="menu-item">Tag 标签</router-link>
        </div>
        <div class="menu-group">
          <div class="menu-group-title">反馈组件</div>
          <router-link to="/components/message" class="menu-item">Message 消息提示</router-link>
        </div>
      </nav>
    </aside>
    <main class="docs-main">
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
.docs-app {
  min-height: 100vh;
  display: flex;
}

.docs-sidebar {
  width: 240px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background: #fff;
  border-right: 1px solid #eee;
  display: flex;
  flex-direction: column;
}

.sidebar-header {
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.sidebar-header h1 {
  margin: 0;
  font-size: 1.5rem;
  color: #409eff;
}

.sidebar-menu {
  padding: 1rem 0;
  flex: 1;
  overflow-y: auto;
}

.menu-group {
  margin-bottom: 1rem;
}

.menu-group-title {
  padding: 0.5rem 1rem;
  color: #909399;
  font-size: 0.875rem;
}

.menu-item {
  display: block;
  padding: 0.5rem 1rem 0.5rem 2rem;
  color: #606266;
  text-decoration: none;
  font-size: 0.875rem;
}

.menu-item:hover {
  color: #409eff;
}

.menu-item.router-link-active {
  color: #409eff;
  background: #ecf5ff;
}

.docs-main {
  margin-left: 240px;
  padding: 2rem;
  flex: 1;
  max-width: calc(100% - 240px);
}
</style>