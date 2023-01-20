<template>
  <div class="enter-screen">
    <h1 class="enter-screen__headline">Ready for a great User experience?</h1>
    <p class="enter-screen__description">Bring your media to the next level!</p>
    <div class="enter-screen__buttons">
      <RouterLink to="/sign-up">
        <TextButton
          class="enter-screen__text-button"
          button-text="Sign Up"
        />
      </RouterLink>
      <RouterLink to="/sign-in">
        <ArrowButton class="enter-screen__arrow-button" />
      </RouterLink>
    </div>
    <div class="enter-screen__img-container">
      <img
        class="enter-screen__img"
        src="@/assets/img/svg/woman.svg"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import TextButton from '@/components/UI/TextButton.vue'
import ArrowButton from '@/components/UI/ArrowButton.vue'
</script>

<style lang="scss" scoped>
.enter-screen {
  align-items: center;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    height: 100%;
  }

  &__headline {
    @include h1;
    text-align: center;
    @media screen and (max-width: 768px) {
      max-width: 220px;
      margin-top: 75px;
    }
  }

  &__description {
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    letter-spacing: 0.02em;
    color: $moderate-purplish-blue;
    margin-top: 16px;
    text-align: center;
    @media screen and (max-width: 768px) {
      max-width: 220px;
    }
  }

  &__buttons {
    display: flex;
    margin-top: 26px;
  }

  &__arrow-button {
    margin-left: 16px;
  }

  &__img-container {
    margin-top: 32px;
    max-width: 100%;
    height: 371px;
    overflow: hidden;
    @media screen and (max-width: 768px) {
      height: 100%;
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
