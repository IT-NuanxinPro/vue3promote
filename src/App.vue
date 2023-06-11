<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
<router-view #default="{route,Component}">
    <transition :enter-active-class="`animate__animated ${route.meta.transition}`">
       <component :is="Component"></component>
    </transition>
</router-view>
</template>

<style >
body {
  margin: 0;
  padding: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
