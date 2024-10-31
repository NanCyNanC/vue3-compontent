<template>
  <div class="tag-demo">
    <h1>Tag 标签</h1>
    <p>用于标记和选择。</p>

    <h2>基础用法</h2>
    <div class="demo-block">
      <m-tag>标签一</m-tag>
      <m-tag type="primary">标签二</m-tag>
      <m-tag type="success">标签三</m-tag>
      <m-tag type="warning">标签四</m-tag>
      <m-tag type="danger">标签五</m-tag>
    </div>

    <h2>可关闭标签</h2>
    <div class="demo-block">
      <m-tag
        v-for="tag in tags"
        :key="tag"
        closable
        @close="handleClose(tag)"
      >
        {{ tag }}
      </m-tag>
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
          <td>类型</td>
          <td>string</td>
          <td>default / primary / success / warning / danger</td>
          <td>default</td>
        </tr>
        <tr>
          <td>closable</td>
          <td>是否可关闭</td>
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
          <td>close</td>
          <td>关闭 Tag 时触发的事件</td>
          <td>event: MouseEvent</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const tags = ref(['标签1', '标签2', '标签3']);

    const handleClose = (tag: string) => {
      const index = tags.value.indexOf(tag);
      if (index > -1) {
        tags.value.splice(index, 1);
      }
    };

    return {
      tags,
      handleClose,
    };
  },
});
</script>

<style scoped>
.tag-demo {
  max-width: 800px;
}

.demo-block {
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 4px;
  margin: 1rem 0;
}

.demo-block .my-tag {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>