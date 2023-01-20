<template>
  <div class="main-screen">
    <p class="main-screen__headline">Hello, {{ authorizedUser.fullName }}</p>
    <div class="main-screen__img-container">
      <img
        class="main-screen__img"
        src="@/assets/img/svg/main.svg"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import { usersStore } from '@/stores/usersStore'

let { authorizedUser } = usersStore()
</script>

<style lang="scss" scoped>
.main-screen {
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
  }

  &__headline {
    @include h1;
    text-align: center;
    @media screen and (max-width: 768px) {
      max-width: 220px;
      margin-top: 75px;
    }
  }

  &__img-container {
    width: 768px;
    height: 532px;
    overflow: hidden;
    margin-top: 15px;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
