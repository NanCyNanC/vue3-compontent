<template>
  <button
    :class="[
      'my-button',
      `my-button--${type}`,
      {
        'is-disabled': disabled,
        'is-loading': loading
      }
    ]"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="loading-spinner"></span>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MButton',
  props: {
    type: {
      type: String,
      default: 'default',
      validator: (value: string) => {
        return ['default', 'primary', 'success', 'warning', 'danger'].includes(value);
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  setup(props, { emit }) {
    const handleClick = (event: MouseEvent) => {
      if (props.disabled || props.loading) return;
      emit('click', event);
    };

    return {
      handleClick,
    };
  },
});
</script>

<style>
.my-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.3s;
  min-height: 32px;
  min-width: 88px;
}

.my-button--default {
  background-color: #fff;
  border-color: var(--border-color);
  color: var(--text-color);
}

.my-button--default:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.my-button--primary {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  color: #fff;
}

.my-button--primary:hover {
  background-color: #66b1ff;
  border-color: #66b1ff;
}

.my-button--success {
  background-color: var(--success-color);
  border-color: var(--success-color);
  color: #fff;
}

.my-button--success:hover {
  background-color: #85ce61;
  border-color: #85ce61;
}

.my-button--warning {
  background-color: var(--warning-color);
  border-color: var(--warning-color);
  color: #fff;
}

.my-button--warning:hover {
  background-color: #ebb563;
  border-color: #ebb563;
}

.my-button--danger {
  background-color: var(--danger-color);
  border-color: var(--danger-color);
  color: #fff;
}

.my-button--danger:hover {
  background-color: #f78989;
  border-color: #f78989;
}

.my-button.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.my-button.is-disabled:hover {
  opacity: 0.5;
}

.loading-spinner {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 8px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: button-spin 1s linear infinite;
}

@keyframes button-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>