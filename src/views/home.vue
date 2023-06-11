<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { ref, watch, watchEffect } from 'vue';

const helloRef = ref<InstanceType<typeof HelloWorld>>()
const btn = () => {
  helloRef.value?.add()
}

// const add = ref([] window as any)
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
    <HelloWorld ref="helloRef"  msg="暖心" :num="666" />
  </div>
</template>

<style scoped lang="scss">
</style>