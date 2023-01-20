<template>
  <div class="sign-in-screen">
    <h1 class="sign-in-screen__headline">Sign In</h1>
    <FormMain
      class="sign-in-screen__main-form"
      :inputs="inputs"
      button-type="submit"
      button-text="Sign In"
    />
  </div>
</template>

<script setup>
import FormMain from '@/components/UI/Form/FormMain.vue'
import { useEmailValidator, usePasswordValidator } from '@/composables/useValidators'

useEmailValidator()
usePasswordValidator()

let inputs = {
  fields: [
    {
      id: 1,
      type: 'email',
      name: 'email',
      placeholder: 'example@acme.com',
      groupName: 'Email',
      validationRules: 'emailValidation',
    },
    {
      id: 2,
      type: 'password',
      name: 'password',
      placeholder: 'Enter password',
      groupName: 'Password',
      needAVisibilityController: true,
      needAQuestionTooltip: true,
      questionTooltipText: 'Password must contain 8+ symbols, 1 special and 2 capital letters',
      validationRules: 'passwordValidation',
    },
  ],
}
</script>

<style lang="scss" scoped>
.sign-in-screen {
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (max-width: 768px) {
    height: 100%;
  }

  &__headline {
    @include h1;
    @media screen and (max-width: 768px) {
      margin-top: 75px;
    }
  }

  &__main-form {
    margin-top: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>
