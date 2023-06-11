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
