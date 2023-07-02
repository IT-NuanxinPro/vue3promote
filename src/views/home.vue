<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import { useRouter} from 'vue-router';
const router = useRouter()

const taskList = reactive([
  {
    id:1,
    name:'平滑上升',
    status: '已完成',
    path: '/slideIn'
  },
])

const goTo = (path: string) => {
  router.push(path)
}

</script>
<template>
  <div class="main">
    <div class="greetings">
      欢迎来到 <span>Vue3Promote</span> 的世界
    </div>
    <div class="line"></div>
    <div class="taskList">
      <div class="title">
        <span>任务列表</span>
      </div>
      <div class="content">
        <div class="item" v-for="item in taskList" :key="item.id">
          <div class="name">{{item.name}}</div>
          <div class="status">{{item.status}}</div>
          <div class="btn" @click="goTo(item.path)">查看</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@mixin flex($direction: row, $justify: center, $align: center) {
  display: flex;
  justify-content: $justify;
  align-items: $align;
  flex-direction: $direction;
}

.main {
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 10px;
  box-sizing: border-box;
  @include flex();
}
.greetings {
  width: 45%;
  font-size: 40px;
  color: #000;
  font-weight: 600;
  text-align: center;
  padding: 40px;
  box-sizing: border-box;
  span {
    color: #2c5db3;
  }
}
.line {
  width: 10px;
  height: 100%;
  background-color: #ccc;
  margin: 0 20px;
  border-radius: 10px;
}
.taskList {
  width: 55%;
  height: 100%;
  @include flex(column, flex-start, flex-start);
  .title {
    width: 100%;
    font-size: 40px;
    color: #000;
    font-weight: 600;
    text-align: center;
    margin-bottom: 10px;
    span {
      color: #2c5db3;
    }
  }
  .content {
    width: 100%;
    height:calc(100% - 37px);
    overflow-y: auto;
    .item {
      width: 100%;
      height: 100px;
      background-color: #fff;
      border-radius: 10px;
      margin-bottom: 10px;
      padding: 15px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .name {
        font-size: 30px;
        color: #000;
        font-weight: 600;
      }
      .status {
        width: 100px;
        height: 50px;
        background-color: $color3;
        border-radius: 10px;
        font-size: 25px;
        color: #000;
        font-weight: 600;
        @include flex();
      }
      .btn {
        width: 100px;
        height: 50px;
        background-color: #2c5db3;
        border-radius: 10px;
        font-size: 30px;
        color: #fff;
        font-weight: 600;
        text-align: center;
        line-height: 50px;
        cursor: pointer;
      }
    }
  }
}

</style>