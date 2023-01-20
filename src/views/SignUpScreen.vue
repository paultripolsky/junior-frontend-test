<template>
  <section class="sign-up-screen">
    <h1 class="sign-up-screen__headline">Sign Up</h1>
    <FormMain
      class="sign-up-screen__main-form"
      :inputs="inputs"
      button-type="submit"
      button-text="Sign Up"
    />
  </section>
</template>

<script setup>
import FormMain from '@/components/UI/Form/FormMain.vue'
import { usePasswordValidator, useConfirmedValidator, useRequiredValidator, useEmailValidator } from '@/composables/useValidators'

usePasswordValidator()
useConfirmedValidator()
useRequiredValidator()
useEmailValidator()

let inputs = {
  fields: [
    {
      id: 1,
      type: 'text',
      name: 'full_name',
      placeholder: 'John Doe',
      groupName: 'Full name',
      validationRules: 'requiredValidation',
    },
    {
      id: 2,
      type: 'email',
      name: 'email',
      placeholder: 'example@acme.com',
      groupName: 'Email',
      validationRules: 'emailValidation',
    },
    {
      id: 3,
      type: 'password',
      name: 'password',
      placeholder: 'Enter password',
      groupName: 'Password',
      needAVisibilityController: true,
      needAQuestionTooltip: true,
      questionTooltipText: 'Password must contain 8+ symbols, 1 special and 2 capital letters',
      validationRules: 'passwordValidation',
    },
    {
      id: 4,
      type: 'password',
      name: 'repeated_password',
      placeholder: 'Repeat password',
      groupName: 'Repeat password',
      needAVisibilityController: true,
      validationRules: 'passwordValidation|confirmedValidation:password',
    },
  ],
}
</script>

<style lang="scss" scoped>
.sign-up-screen {
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
