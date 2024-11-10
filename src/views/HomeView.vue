<script setup lang="ts">
import { useStore } from '@/store';
import { Libs, toLibText } from '../libs/_list';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const modedialog = ref();
function start(l: Libs){
  useStore().newgame(l);
  location.hash = "/game"
}
</script>

<template>
  <h2>LongTyper</h2>
  <button class="startbtn" @click="modedialog.open=true">最初から始める</button><br>
  <RouterLink class="startbtn" to="game">途中から始める</RouterLink><br>
  <RouterLink class="startbtn" to="credit">クレジット表記</RouterLink>
  <dialog ref="modedialog">
    モードを選んでください
    <table border>
      <tr><th>名前</th><th>文字数</th></tr>
      <template v-for="l in Libs" :key="l">
        <tr v-if="Number.isNaN(parseInt(l.toString()))">
          <td @click="start(l)">{{ l }}</td>
          <td>{{ toLibText(l).length }}</td>
        </tr>
      </template>
    </table>
  </dialog>
</template>
<style scoped>
.startbtn{
  display:inline-block;
  font-size:20px;
  margin:10px;
  padding:15px;
  border-radius: 40px;
  border:1px #000 solid;
  background:#444;
  color:#fff;
  cursor:pointer;
  text-decoration: none;
  transition: all 0.3s ease;
}
.startbtn:hover{
  background:#eee;
  color:#111;
}
dialog{
  position:fixed;
  width:80%;
  height:30%;
  text-align: center;
  overflow-y:scroll;
  background:#333;
  color:white;
  border:1px #000 solid;
}
td:first-child{
  cursor: pointer;
}
</style>
