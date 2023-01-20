<template>
  <div class="app__wrapper">
    <router-view v-slot="{ Component }">
      <transition
        name="fade"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>

<style lang="scss" scoped>
.app {
  &__wrapper {
    background-color: $bg-pink;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-height: 640px) {
      height: auto;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
