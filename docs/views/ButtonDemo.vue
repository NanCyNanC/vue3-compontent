<template>
  <div class="button-demo">
    <h1>Button 按钮</h1>
    <p>常用的操作按钮。</p>

    <h2>基础用法</h2>
    <div class="demo-block">
      <m-button>默认按钮 (用于次要操作)</m-button>
      <m-button type="primary">主要按钮 (用于主要操作)</m-button>
      <m-button type="success">成功按钮 (用于成功/完成操作)</m-button>
      <m-button type="warning">警告按钮 (用于警告操作)</m-button>
      <m-button type="danger">危险按钮 (用于危险/删除操作)</m-button>
    </div>

    <h2>使用示例</h2>
    <div class="demo-block">
      <div class="example-item">
        <m-button>取消</m-button>
        <m-button type="primary">确定</m-button>
      </div>
      <div class="example-item">
        <m-button type="success">保存成功</m-button>
      </div>
      <div class="example-item">
        <m-button type="warning">注意修改</m-button>
      </div>
      <div class="example-item">
        <m-button type="danger">删除</m-button>
      </div>
    </div>

    <h2>禁用状态</h2>
    <div class="demo-block">
      <m-button disabled>禁用按钮</m-button>
      <m-button type="primary" disabled>禁用主要按钮</m-button>
    </div>

    <h2>加载状态</h2>
    <div class="demo-block">
      <m-button loading>加载中</m-button>
      <m-button type="primary" loading>加载中</m-button>
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
          <td>type</td>
          <td>按钮类型</td>
          <td>string</td>
          <td>default / primary / success / warning / danger</td>
          <td>default</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用</td>
          <td>boolean</td>
          <td>-</td>
          <td>false</td>
        </tr>
        <tr>
          <td>loading</td>
          <td>是否显示加载状态</td>
          <td>boolean</td>
          <td>-</td>
          <td>false</td>
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
          <td>click</td>
          <td>点击按钮时触发</td>
          <td>event: MouseEvent</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ButtonDemo',
});
</script>

<style scoped>
.button-demo {
  max-width: 1000px;
}

.demo-block {
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 4px;
  margin: 1rem 0;
}

.demo-block .my-button {
  margin-right: 1rem;
  margin-bottom: 1rem;
}

.example-item {
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px dashed #eee;
  border-radius: 4px;
}

.example-item:last-child {
  margin-bottom: 0;
}

.example-item .my-button {
  margin-right: 0.5rem;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

th, td {
  border: 1px solid #eee;
  padding: 0.5rem;
  text-align: left;
}

th {
  background: #f6f8fa;
}
</style>