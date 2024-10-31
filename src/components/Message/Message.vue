<template>
  <transition name="message-fade">
    <div
      v-show="visible"
      class="my-message"
      :class="[`my-message--${type}`]"
      role="alert"
    >
      {{ message }}
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'MMessage',
  props: {
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'info',
      validator: (value: string) => {
        return ['info', 'success', 'warning', 'error'].includes(value);
      },
    },
    duration: {
      type: Number,
      default: 3000,
    },
    onClose: {
      type: Function,
      default: () => {},
    },
  },
  setup(props) {
    const visible = ref(false);

    onMounted(() => {
      visible.value = true;
      if (props.duration > 0) {
        setTimeout(() => {
          visible.value = false;
          props.onClose();
        }, props.duration);
      }
    });

    return {
      visible,
    };
  },
});
</script>

<style>
.my-message {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 16px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  pointer-events: none;
  z-index: 2000;
}

.my-message--info {
  background-color: #ecf5ff;
  color: var(--primary-color);
}

.my-message--success {
  background-color: #f0f9eb;
  color: var(--success-color);
}

.my-message--warning {
  background-color: #fdf6ec;
  color: var(--warning-color);
}

.my-message--error {
  background-color: #fef0f0;
  color: var(--danger-color);
}

.message-fade-enter-active,
.message-fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.message-fade-enter-from,
.message-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -100%);
}
</style>