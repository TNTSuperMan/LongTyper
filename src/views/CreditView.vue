<script setup lang="ts">
import _licenses from '@/libs/_licenses';
import license from "../license"
import { RouterLink } from 'vue-router';
</script>
<template>
  <RouterLink to="/">戻る</RouterLink>
  <div class="credit">
    <h1>クレジット表記</h1>
    <h2>タイピング内容</h2>
    <template v-for="(l,k) in _licenses" :key="k">
      <h3>{{ k }}</h3>
      <pre>{{ l }}</pre>
    </template>
    <h2>ライブラリ</h2>
    <template v-for="(l,k) in license" :key="k">
      <h3>{{ k }}</h3>
      <pre>{{ l }}</pre>
    </template>
  </div>
</template>

<style>
a{
  background:#333;
  color:white;
  text-decoration: none;
  padding:10px;
  border-radius: 10px;
  margin:10px;
}
.credit{
  text-align: left;
}
pre{
  background:#333;
  padding:10px;
  border-radius: 10px;
  white-space:pre-wrap;
}
</style>
