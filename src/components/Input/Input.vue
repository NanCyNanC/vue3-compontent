<template>
  <div class="my-input-wrapper">
    <input
      class="my-input"
      :class="{
        'is-disabled': disabled,
        'is-error': error
      }"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <span v-if="error" class="error-message">{{ error }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MInput',
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue', 'focus', 'blur'],
  setup(props, { emit }) {
    const handleInput = (event: Event) => {
      const target = event.target as HTMLInputElement;
      emit('update:modelValue', target.value);
    };

    const handleFocus = (event: FocusEvent) => {
      emit('focus', event);
    };

    const handleBlur = (event: FocusEvent) => {
      emit('blur', event);
    };

    return {
      handleInput,
      handleFocus,
      handleBlur,
    };
  },
});
</script>

<style>
.my-input-wrapper {
  display: inline-block;
  width: 100%;
}

.my-input {
  width: 100%;
  height: 32px;
  padding: 0 12px;
  font-size: 14px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  transition: all 0.3s;
  outline: none;
}

.my-input:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.2);
}

.my-input.is-disabled {
  background-color: #f5f7fa;
  cursor: not-allowed;
}

.my-input.is-error {
  border-color: var(--danger-color);
}

.my-input.is-error:focus {
  box-shadow: 0 0 0 2px rgba(245, 108, 108, 0.2);
}

.error-message {
  display: block;
  font-size: 12px;
  color: var(--danger-color);
  margin-top: 4px;
}
</style>