<template>
  <div
    class="question-tooltip"
    ref="tooltip"
  >
    <transition>
      <p
        v-if="textVisibility"
        class="question-tooltip__text"
      >
        {{ text }}
      </p>
    </transition>
    <div
      @click="toggleTextVisibility"
      class="question-tooltip__icon-container"
    >
      <svg
        class="question-tooltip__icon"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.2">
          <path
            d="M7.13983 1.16669C3.92324 1.16669 1.3065 3.78342 1.3065 7.00002C1.3065 10.2166 3.92324 12.8334 7.13983 12.8334C10.3564 12.8334 12.9732 10.2166 12.9732 7.00002C12.9732 3.78342 10.3564 1.16669 7.13983 1.16669ZM6.89678 10.4028C6.49428 10.4028 6.16761 10.0761 6.16761 9.67363C6.16761 9.27113 6.49428 8.94447 6.89678 8.94447C7.29928 8.94447 7.62594 9.27113 7.62594 9.67363C7.62594 10.0761 7.29928 10.4028 6.89678 10.4028ZM8.9924 6.08953C8.84219 6.33016 8.55685 6.60044 8.13587 6.90085C7.45483 7.40446 7.47331 7.51627 7.47331 7.97224H6.27893C6.27893 7.61592 6.27115 7.34224 6.46365 7.00926C6.58664 6.79585 6.81219 6.56884 7.13983 6.3287C7.5331 6.04773 7.91518 5.77697 7.91518 5.30544C7.91518 4.86356 7.53699 4.70606 7.09511 4.70606C6.64449 4.70606 6.13067 4.85335 5.55365 5.14794L5.06219 4.16113C6.11074 3.57342 7.76546 3.30752 8.67011 4.04398C9.33414 4.58502 9.33803 5.53634 8.9924 6.08953Z"
            fill="#1E1A3E"
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useClickOutside from '@/composables/useClickOutside'

let props = defineProps({
  text: {
    type: String,
    required: true,
  },
})

let textVisibility = ref(false)
let tooltip = ref(null)

function toggleTextVisibility() {
  return (textVisibility.value = !textVisibility.value)
}

useClickOutside(tooltip, () => {
  textVisibility.value = false
})
</script>

<style lang="scss" scoped>
.question-tooltip {
  position: relative;

  &__text {
    background: $deep-purple-blue;
    border-radius: 8px;
    padding: 7px 11px 5px 11px;
    font-weight: 400;
    font-size: 10px;
    line-height: 140%;
    letter-spacing: -0.4px;
    color: $white;
    position: absolute;
    right: 10px;
    bottom: 20px;
    width: 185px;

    &:after {
      position: absolute;
      content: '';
      width: 10px;
      height: 7px;
      transform: rotate(180deg);
      background-image: linear-gradient(to bottom right, transparent 50%, $deep-purple-blue 0),
        linear-gradient(to top right, $deep-purple-blue 50%, transparent 0);
      background-size: 50% 100%;
      background-repeat: no-repeat;
      background-position: left, right;
      top: 95%;
      right: 9px;
    }
  }

  &__icon-container {
    width: 15px;
    height: 15px;
    overflow: hidden;
    cursor: pointer;
    margin-right: 16px;
  }

  &__icon {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
