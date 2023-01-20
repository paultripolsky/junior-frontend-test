<template>
  <div class="form-toggle">
    <p class="form-toggle__text">{{ text }}</p>
    <RouterLink
      :to="linkHref"
      class="form-toggle__link"
    >
      {{ linkText }}
    </RouterLink>
  </div>
</template>

<script setup>
let props = defineProps({
  text: {
    type: String,
    required: true,
  },
  linkText: {
    type: String,
    required: true,
  },
  linkHref: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.form-toggle {
  font-weight: 500;
  font-size: 14px;
  line-height: 143%;
  display: flex;
  align-items: center;
  flex-direction: column;

  &__link,
  &__text {
    color: $deep-purple-blue;
  }

  &__link {
    text-decoration: underline;
  }
}
</style>
