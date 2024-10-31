<template>
  <div class="input-demo">
    <h1>Input 输入框</h1>
    <p>通过鼠标或键盘输入字符。</p>

    <h2>基础用法</h2>
    <div class="demo-block">
      <m-input v-model="input1" placeholder="请输入内容" />
    </div>

    <h2>禁用状态</h2>
    <div class="demo-block">
      <m-input v-model="input2" disabled placeholder="禁用状态" />
    </div>

    <h2>错误状态</h2>
    <div class="demo-block">
      <m-input
        v-model="input3"
        placeholder="请输入邮箱"
        :error="emailError"
        @blur="validateEmail"
      />
    </div>

    <h2>API</h2>
    <h3>属性</h3>
    <table>
      <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>modelValue</td>
          <td>绑定值</td>
          <td>string / number</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>输入框占位文本</td>
          <td>string</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用</td>
          <td>boolean</td>
          <td>-</td>
          <td>false</td>
        </tr>
        <tr>
          <td>error</td>
          <td>错误信息</td>
          <td>string</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>

    <h3>事件</h3>
    <table>
      <thead>
        <tr>
          <th>事件名</th>
          <th>说明</th>
          <th>回调参数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>update:modelValue</td>
          <td>在输入值改变时触发</td>
          <td>value: string</td>
        </tr>
        <tr>
          <td>focus</td>
          <td>在 Input 获得焦点时触发</td>
          <td>event: FocusEvent</td>
        </tr>
        <tr>
          <td>blur</td>
          <td>在 Input 失去焦点时触发</td>
          <td>event: FocusEvent</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const input1 = ref('');
    const input2 = ref('');
    const input3 = ref('');
    const emailError = ref('');

    const validateEmail = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input3.value)) {
        emailError.value = '请输入有效的邮箱地址';
      } else {
        emailError.value = '';
      }
    };

    return {
      input1,
      input2,
      input3,
      emailError,
      validateEmail,
    };
  },
});
</script>

<style scoped>
.input-demo {
  max-width: 800px;
}

.demo-block {
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 4px;
  margin: 1rem 0;
}

.demo-block .my-input {
  width: 300px;
}
</style>