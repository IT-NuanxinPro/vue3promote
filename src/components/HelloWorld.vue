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

// 通过defineExpose暴露出去, 在父组件中可以通过ref.value调用
defineExpose({
  add,
  count
})

</script>

<template>
    <div class="greetings">
      欢迎来到 <span>Vue3Promote</span> 的世界
    </div>
    <div class="author">
      --{{ msg }}
    </div>
</template>

<style scoped lang="scss">
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.greetings {
  width: 100%;
  font-size: 80px;
  color: #000;
  font-weight: 600;
  text-align: center;
  margin-top: 30vh;
  span {
    color: #2c5db3;
  }
}

.author{
  width: 100%;
  font-size: 80px;
  color: #000;
  font-weight: 600;
  text-align: right;
  margin-top: 10vh;
  padding: 10px;
  box-sizing: border-box;
  span {
    color: #2c5db3;
  }
}

</style>
