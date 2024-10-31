<template>
  <div class="message-demo">
    <h1>Message 消息提示</h1>
    <p>常用于主动操作后的反馈提示。</p>

    <h2>基础用法</h2>
    <div class="demo-block">
      <m-button @click="showMessage">显示消息提示</m-button>
    </div>

    <h2>不同状态</h2>
    <div class="demo-block">
      <m-button @click="showSuccess">成功</m-button>
      <m-button @click="showWarning">警告</m-button>
      <m-button @click="showError">错误</m-button>
    </div>

    <h2>API</h2>
    <h3>Message 方法</h3>
    <table>
      <thead>
        <tr>
          <th>方法名</th>
          <th>说明</th>
          <th>参数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Message</td>
          <td>显示消息提示</td>
          <td>options | message</td>
        </tr>
        <tr>
          <td>Message.success</td>
          <td>显示成功消息</td>
          <td>message, duration</td>
        </tr>
        <tr>
          <td>Message.warning</td>
          <td>显示警告消息</td>
          <td>message, duration</td>
        </tr>
        <tr>
          <td>Message.error</td>
          <td>显示错误消息</td>
          <td>message, duration</td>
        </tr>
      </tbody>
    </table>

    <h3>Options</h3>
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
          <td>message</td>
          <td>消息文字</td>
          <td>string</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>type</td>
          <td>主题</td>
          <td>string</td>
          <td>info / success / warning / error</td>
          <td>info</td>
        </tr>
        <tr>
          <td>duration</td>
          <td>显示时间，单位为毫秒。设为 0 则不会自动关闭</td>
          <td>number</td>
          <td>-</td>
          <td>3000</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue';

export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance()!;

    const showMessage = () => {
      proxy?.$message({
        message: '这是一条消息提示',
      });
    };

    const showSuccess = () => {
      proxy?.$message.success('这是一条成功消息');
    };

    const showWarning = () => {
      proxy?.$message.warning('这是一条警告消息');
    };

    const showError = () => {
      proxy?.$message.error('这是一条错误消息');
    };

    return {
      showMessage,
      showSuccess,
      showWarning,
      showError,
    };
  },
});
</script>

<style scoped>
.message-demo {
  max-width: 800px;
}

.demo-block {
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 4px;
  margin: 1rem 0;
}

.demo-block .my-button {
  margin-right: 1rem;
}
</style>