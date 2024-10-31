# My Vue3 UI Library

A Vue 3 + TypeScript component library.

## Installation

```bash
npm install my-vue3-ui
```

## Usage

### Global Registration

```typescript
import { createApp } from 'vue';
import MyVue3UI from 'my-vue3-ui';
import 'my-vue3-ui/dist/style.css';

const app = createApp(App);
app.use(MyVue3UI);
app.mount('#app');
```

### Individual Components

```typescript
import { Button } from 'my-vue3-ui';
import 'my-vue3-ui/dist/style.css';

export default {
  components: {
    MButton: Button,
  },
};
```

## Example

```vue
<template>
  <m-button type="primary" @click="handleClick">
    Click me
  </m-button>
</template>
```

## Available Components

- Button
  - Props:
    - type: 'default' | 'primary' | 'success' | 'warning' | 'danger'
    - disabled: boolean
    - loading: boolean
  - Events:
    - click: Emitted when button is clicked