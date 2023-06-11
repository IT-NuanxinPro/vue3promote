<script setup lang="ts"></script>

<template>
  <div class="container">
      <div class="item" v-slide-in v-for="item in 6" :key="item">{{item}}</div>
  </div>
</template>

<style scoped lang="scss">
$color: $color1, $color2, $color3, $color4, $color5, $color6;
// 简化上述代码
@mixin bg($i) {
  background-color: nth($color, $i);
}
.container {
  margin : 1em auto;
  width : 80%;
  .item{
    width : 100%;
    height : 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-top: 80px;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,.2);
  }
  @for $i from 1 through 6 {
    .item:nth-child(#{$i}) {
      @include bg($i);
    }
  }
}
</style>