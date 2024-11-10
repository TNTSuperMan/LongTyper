<script setup lang="ts">
import { Libs, toLibText } from '@/libs/_list';
import { useStore } from '@/store';
import { computed, onMounted, onUnmounted, ref } from 'vue';

const store = useStore();
const raw = toLibText(store.lib ?? Libs.sample);
const cleared = ref(false)
const text = ref(raw.substring(store.len));
const codeelm = ref<HTMLElement|null>();
function onkeydown(e:KeyboardEvent){
  if(e.key.length == 1){
    if(raw[store.len] == e.key){
      store.next();
      text.value = text.value.substring(1)
      if(text.value.length == 0){
        clearInterval(int);
        cleared.value = true;
      }
    }
  }
}

const entity = computed(()=>{
  let t = text.value.substring(0,100).replace(" ", "&nbsp;");
  let z = t;
  while(true){
    if((z=t.replace("<","&lt;")) != t) t=z;
    else if((z=t.replace(">","&gt;")) != t) t=z;
    else break;
  }
  return t;
})
const elapsed = ref("");
const timezone = new Date().getTimezoneOffset() * 1000*60
function updateTime(){
  const date = new Date(Date.now()-store.start+timezone);
  elapsed.value = date.toLocaleTimeString();
}
updateTime()
const int = setInterval(updateTime,1000)
onMounted(()=>document.addEventListener("keydown",onkeydown))
onUnmounted(()=>{
  document.removeEventListener("keydown",onkeydown)
  clearInterval(int)
})

function save(){
  location.hash = "/"
}
</script>
<template>
  <button @click="save">セーブして戻る</button>
  <div class="game" @keydown="onkeydown">
    <code ref="codeelm" v-html="entity"></code>
    <div class="card">
      現在のタイプ数: {{ store.len }}
    </div>
    <div class="card">
      経過時間: {{ elapsed }}
    </div>
    <div class="clear" v-if="cleared">
      <h2>成功！</h2>
      <p>タイプ数：{{ store.len }}</p>
      <p>種類：{{ store.lib }}</p>
      <p>時間：{{ elapsed }}</p>
    </div>
  </div>
</template>
<style scoped>
code{
  text-align:left;
  text-wrap:nowrap;
  display:block;
  overflow:hidden;
  font-size:15px;
  margin: 50px 100px;

  border-radius: 10px;
  background:#333;
  height:15px;
  padding:10px;
  white-space:pre;
  line-break:loose;
}
.card{
  display:inline-block;
  margin:5px;
  padding:5px;
  background:#111;
  border-radius: 10px;
}
button{
  background:#333;
  color:#fff;
  border:1px #000 solid;
  padding:5px;
  border-radius: 5px;
  cursor:pointer;
}
</style>
