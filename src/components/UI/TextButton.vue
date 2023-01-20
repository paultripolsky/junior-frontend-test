<template>
  <button
    class="text-button"
    :type="buttonType"
  >
    {{ buttonText }}
  </button>
</template>

<script setup>
let props = defineProps({
  buttonText: {
    type: String,
    required: true,
  },
  buttonType: {
    type: String,
  },
})
</script>

<style lang="scss" scoped>
.text-button {
  padding: 13px 33px;
  background-color: $white;
  color: $black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  transition: all 0.2s ease-in-out;
  font-weight: 500;
  font-size: 14px;
  line-height: 143%;
  width: 100%;
  border: 1px solid transparent;

  &--blue {
    background-color: $deep-purple-blue;
    color: $white;

    &:hover {
      background-color: $white !important;
      color: $deep-purple-blue !important;
    }
  }

  &--disabled {
    background-color: $button-disabled;
    user-select: none;
    cursor: not-allowed;
    color: $white;
  }

  &:hover {
    background-color: $deep-purple-blue;
    color: $white;
    border: 1px solid $deep-purple-blue;
  }
}
</style>
