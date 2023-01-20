<template>
  <div class="submit-error">
    <div class="submit-error__row">
      <div class="submit-error__text">
        {{ text }}
      </div>
      <div
        class="submit-error__close-icon-container"
        @click="closeError"
      >
        <svg
          class="submit-error__close-icon"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.25 4.75831C14.925 4.43331 14.4 4.43331 14.075 4.75831L9.99998 8.82498L5.92498 4.74998C5.59998 4.42498 5.07498 4.42498 4.74998 4.74998C4.42498 5.07498 4.42498 5.59998 4.74998 5.92498L8.82498 9.99998L4.74998 14.075C4.42498 14.4 4.42498 14.925 4.74998 15.25C5.07498 15.575 5.59998 15.575 5.92498 15.25L9.99998 11.175L14.075 15.25C14.4 15.575 14.925 15.575 15.25 15.25C15.575 14.925 15.575 14.4 15.25 14.075L11.175 9.99998L15.25 5.92498C15.5666 5.60831 15.5666 5.07498 15.25 4.75831Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
let props = defineProps({
  text: {
    type: String,
    required: true,
  },
})

let emit = defineEmits(['closeError'])

function closeError() {
  emit('closeError', false)
}
</script>

<style lang="scss" scoped>
.submit-error {
  background: $error-message-light;
  max-width: 275px;
  border-radius: 50px;
  min-height: 48px;
  display: flex;
  align-items: center;
  padding: 0 16px 0 25px;

  &__row {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  &__text {
    font-weight: 500;
    font-size: 14px;
    line-height: 143%;
    color: $white;
  }

  &__close-icon-container {
    width: 20px;
    height: 22px;
    overflow: hidden;
    margin-left: 25px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: rotate(45deg);
    }
  }

  &__close-icon {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
