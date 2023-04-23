<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import type { Ref } from 'vue';
/* const props = defineProps<{ 
  msg: string,
  num: number,
 }>() */

interface Props {
  msg: string,
  num: number,
}
defineProps<Props>()

// const year = ref<string|number>('2020')  // 泛型
const year: Ref<string | number> = ref('2020') // 类型断言

interface Obj {
  name: string,
  age: number,
  [key: string]: string | number,
}
const obj: Obj = reactive({
  name: 'zhangsan',
  age: 18,
})

const count = ref(0)
// 计算属性
const double = computed<number>(() => count.value * 2)

const add = () => {
  count.value++
}


defineExpose({
  add,
  count
})

</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>{{ num }}</h3>
    <h3>{{ year }}</h3>
    <div>
      <h3>{{ obj.name }}</h3>
      <h3>{{ obj.age }}</h3>
      <button @click="add">count is: {{ count }}</button>
      {{ double }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.greetings {
  color: $color;

  .green {
    color: $main;
  }
}
</style>
