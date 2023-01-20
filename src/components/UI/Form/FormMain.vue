<template>
  <div class="main-form">
    <div class="main-form__group">
      <Form
        @submit="onSubmit"
        v-slot="{ values, errors }"
      >
        <div class="main-form__inputs">
          <InputGroup
            class="main-form__input"
            v-for="input of inputs.fields"
            :input-type="input.type"
            :input-placeholder="input.placeholder"
            :input-name="input.name"
            :validation-rules="input.validationRules"
            :need-a-visibility-controller="input.needAVisibilityController"
            :need-a-question-tooltip="input.needAQuestionTooltip"
            :question-tooltip-text="input.questionTooltipText"
            :group-name="input.groupName"
            :type="input.type"
          />
        </div>
        <TextButton
          class="main-form__button"
          :button-text="buttonText"
          :button-type="buttonType"
          :class="{
            'text-button--blue': Object.keys(errors).length <= 0,
            'text-button--disabled': Object.keys(errors).length > 0,
          }"
        />
        <FormToggle
          class="main-form__toggle"
          :text="formToggleProps.text"
          :link-text="formToggleProps.linkText"
          :link-href="formToggleProps.linkHref"
        />
      </Form>
    </div>
    <SubmitError
      class="main-form__submit-error"
      v-if="submitErrorVisible"
      :text="submitErrorText"
      @close-error="closeError"
    />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { Form } from 'vee-validate'
import router from '@/router/index.js'
import { usersStore } from '@/stores/usersStore'
import InputGroup from '@/components/UI/InputGroup.vue'
import TextButton from '@/components/UI/TextButton.vue'
import FormToggle from '@/components/UI/Form/FormToggle.vue'
import SubmitError from '@/components/UI/SubmitError.vue'

let props = defineProps({
  inputs: {
    type: Object,
    required: true,
  },
  buttonText: {
    type: String,
    required: true,
  },
  buttonType: {
    type: String,
  },
})

let route = useRoute()
let { addUser, authorizeUser, findUserIdByEmail, findUserById, auth } = usersStore()
let submitErrorVisible = ref(false)
let submitErrorText = ref('')

//Auth controller

function onSubmit(values) {
  let { email, password, full_name } = values
  if (route.path === '/sign-up') {
    let userId = findUserIdByEmail(email)
    let findableUser = findUserById(userId)
    if (!findableUser) {
      let id = Date.now()
      addUser(email, password, full_name, id)
      authorizeUser(id)
      router.push('/main')
    } else {
      submitErrorVisible.value = true
      submitErrorText.value = 'This user already exists'
    }
  }
  if (route.path === '/sign-in') {
    let userId = findUserIdByEmail(email)
    let findableUser = findUserById(userId)
    if (findableUser && auth(email, password, findableUser)) {
      authorizeUser(userId)
      router.push('main')
    } else {
      submitErrorVisible.value = true
      submitErrorText.value = 'Wrong email or password'
    }
  }
}

function closeError(state) {
  submitErrorVisible.value = state
}

let formToggleProps = computed(() => {
  return route.path === '/sign-up'
    ? { text: 'Already have an account?', linkText: 'Sign In', linkHref: '/sign-in' }
    : { text: 'Don’t have an account yet?', linkText: 'Sign up', linkHref: '/sign-up' }
})
</script>

<style lang="scss" scoped>
.main-form {
  &__group {
    padding: 23px 19px 19px 19px;
    background: $white;
    border-radius: 40px;
    min-width: 275px;
  }

  &__button {
    margin-top: 40px;
  }

  &__input {
    &:not(:first-child) {
      margin-top: 24px;
    }
  }

  &__toggle {
    margin-top: 20px;
  }

  &__submit-error {
    margin-bottom: 25px;
    margin-top: auto;
  }
}
</style>
