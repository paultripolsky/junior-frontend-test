<template>
  <button class="arrow-button">
    <span class="arrow-button__img-container">
      <svg
        class="arrow-button__img"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5 13H16.17L12.29 16.88C11.9 17.27 11.9 17.91 12.29 18.3C12.68 18.69 13.31 18.69 13.7 18.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L13.71 5.7C13.32 5.31 12.69 5.31 12.3 5.7C11.91 6.09 11.91 6.72 12.3 7.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z"
          fill="white"
        />
      </svg>
    </span>
  </button>
</template>

<script setup></script>

<style lang="scss" scoped>
.arrow-button {
  width: 48px;
  height: 48px;
  border-radius: 100%;
  background-color: $deep-purple-blue;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  &__img-container {
    width: 24px;
    height: 24px;
    overflow: hidden;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &:hover {
    background-color: $white;

    & path {
      fill: $deep-purple-blue;
    }
  }
}
</style>