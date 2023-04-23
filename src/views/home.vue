<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import { ref, watch,watchEffect } from 'vue';

const helloRef = ref<InstanceType<typeof HelloWorld> | null>(null)
const btn = () => {
  helloRef.value?.add()
}


const val = ref<number>(0)
/* watchEffect((onInvalidate) => {
  console.log(val.value);
  onInvalidate(() => {
    console.log('暖心');
  })
})
setTimeout(() => {
  val.value = 100
}, 2000); */

</script>
<template>
  <div class="home">
    <h1>{{ val }}</h1>
    <button @click="btn">点击</button>
    <HelloWorld  ref="helloRef"  msg="Welcome to Your Vue.js" :num="123" />
  </div>
</template>

<style scoped>
</style>