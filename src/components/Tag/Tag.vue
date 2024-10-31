<template>
  <span
    class="my-tag"
    :class="[
      `my-tag--${type}`,
      {
        'is-closable': closable
      }
    ]"
  >
    <slot></slot>
    <span
      v-if="closable"
      class="my-tag__close"
      @click.stop="handleClose"
    >×</span>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MTag',
  props: {
    type: {
      type: String,
      default: 'default',
      validator: (value: string) => {
        return ['default', 'primary', 'success', 'warning', 'danger'].includes(value);
      },
    },
    closable: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['close'],
  setup(props, { emit }) {
    const handleClose = (event: MouseEvent) => {
      emit('close', event);
    };

    return {
      handleClose,
    };
  },
});
</script>

<style>
.my-tag {
  display: inline-flex;
  align-items: center;
  height: 24px;
  padding: 0 8px;
  font-size: 12px;
  line-height: 24px;
  border-radius: 4px;
  white-space: nowrap;
}

.my-tag--default {
  background-color: #ecf5ff;
  color: var(--primary-color);
  border: 1px solid #d9ecff;
}

.my-tag--primary {
  background-color: var(--primary-color);
  color: #fff;
}

.my-tag--success {
  background-color: var(--success-color);
  color: #fff;
}

.my-tag--warning {
  background-color: var(--warning-color);
  color: #fff;
}

.my-tag--danger {
  background-color: var(--danger-color);
  color: #fff;
}

.my-tag.is-closable {
  padding-right: 4px;
}

.my-tag__close {
  margin-left: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.3s;
}

.my-tag__close:hover {
  opacity: 0.7;
}
</style>