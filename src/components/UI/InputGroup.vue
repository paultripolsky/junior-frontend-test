<template>
  <div class="input-group">
    <div class="input-group__row">
      <div class="input-group__name">{{ groupName }}</div>
      <QuestionTooltip
        v-if="needAQuestionTooltip"
        :text="questionTooltipText"
      />
    </div>
    <div class="input-group__row">
      <Field
        v-slot="{ field, errors }"
        :name="inputName"
        :rules="validationRules"
        :validate-on-input="true"
      >
        <div class="input-group__field-group">
          <input
            class="input-group__input"
            v-bind="field"
            :type="refInputType"
            :style="{ paddingRight: paddingOnInputWithVisibilityController }"
            :class="{ 'input-group__input--error': errors[0] }"
            ref="currentInput"
            autocomplete="on"
          />
          <span class="input-group__error-message">{{ errors[0] }}</span>
        </div>
      </Field>
      <div
        v-if="needAVisibilityController"
        class="input-group__visibility-controller"
        @click="toggleInputType"
      >
        <svg
          v-if="visibilityState"
          class="input-group__visibility-controller-icon"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.99999 3.33333C5.83333 3.33333 2.27499 5.925 0.833328 9.58333C2.27499 13.2417 5.83333 15.8333 9.99999 15.8333C14.1667 15.8333 17.725 13.2417 19.1667 9.58333C17.725 5.925 14.1667 3.33333 9.99999 3.33333ZM9.99999 13.75C7.69999 13.75 5.83333 11.8833 5.83333 9.58333C5.83333 7.28333 7.69999 5.41667 9.99999 5.41667C12.3 5.41667 14.1667 7.28333 14.1667 9.58333C14.1667 11.8833 12.3 13.75 9.99999 13.75ZM9.99999 7.08333C8.61666 7.08333 7.49999 8.2 7.49999 9.58333C7.49999 10.9667 8.61666 12.0833 9.99999 12.0833C11.3833 12.0833 12.5 10.9667 12.5 9.58333C12.5 8.2 11.3833 7.08333 9.99999 7.08333Z"
            fill="#181C43"
          />
        </svg>
        <svg
          v-else
          class="input-group__visibility-controller-icon"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 3.41667C12.3 3.41667 14.1667 5.28334 14.1667 7.58334C14.1667 8.00834 14.0834 8.41667 13.9667 8.80001L16.5167 11.35C17.675 10.325 18.5917 9.04167 19.1667 7.57501C17.725 3.92501 14.1667 1.33334 10 1.33334C8.94169 1.33334 7.92502 1.50001 6.96669 1.80834L8.77502 3.61667C9.16669 3.50001 9.57502 3.41667 10 3.41667ZM2.25834 0.63333C1.93334 0.95833 1.93334 1.48333 2.25834 1.80833L3.90001 3.45C2.55001 4.525 1.47501 5.94166 0.833344 7.58333C2.27501 11.2417 5.83334 13.8333 10 13.8333C11.2667 13.8333 12.475 13.5833 13.5917 13.15L15.8583 15.4167C16.1833 15.7417 16.7083 15.7417 17.0333 15.4167C17.3583 15.0917 17.3583 14.5667 17.0333 14.2417L3.44168 0.63333C3.11668 0.30833 2.58334 0.30833 2.25834 0.63333ZM10 11.75C7.70003 11.75 5.83336 9.88333 5.83336 7.58333C5.83336 6.94166 5.98336 6.33333 6.24169 5.8L7.55003 7.10833C7.52503 7.25833 7.50003 7.41666 7.50003 7.58333C7.50003 8.96666 8.61669 10.0833 10 10.0833C10.1667 10.0833 10.3167 10.0583 10.475 10.025L11.7834 11.3333C11.2417 11.6 10.6417 11.75 10 11.75ZM12.475 7.30834C12.35 6.14167 11.4334 5.23334 10.275 5.10834L12.475 7.30834Z"
            fill="#181C43"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { Field } from 'vee-validate'
import { useFocus } from '@/composables/useFocus'
import QuestionTooltip from '@/components/UI/QuestionTooltip.vue'

let props = defineProps({
  groupName: {
    type: String,
  },
  inputType: {
    type: String,
    required: true,
  },
  inputPlaceholder: {
    type: String,
    required: true,
  },
  inputName: {
    type: String,
    required: true,
  },
  validationRules: {
    type: [Object, String, Function],
  },
  needAVisibilityController: {
    type: Boolean,
  },
  needAQuestionTooltip: {
    type: Boolean,
  },
  questionTooltipText: {
    type: String,
  },
})

let refInputType = ref(props.inputType)
let currentInput = ref(null)

function toggleInputType() {
  if (refInputType.value === 'password') {
    refInputType.value = 'text'
    useFocus(currentInput)
  } else {
    refInputType.value = 'password'
    useFocus(currentInput)
  }
}

let paddingOnInputWithVisibilityController = computed(() => {
  return props.needAVisibilityController ? '40px' : '18px'
})
let visibilityState = computed(() => {
  return refInputType.value === 'password'
})
</script>

<style lang="scss" scoped>
.input-group {
  width: 100%;
  display: flex;
  flex-direction: column;

  &__row {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
  }

  &__field-group {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  &__name {
    color: rgba(0, 0, 0, 0.8);
    font-weight: 600;
    font-size: 12px;
    line-height: 167%;
    margin-left: 18px;
  }

  &__input {
    padding: 9px 18px;
    color: rgba(0, 0, 0, 0.8);
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    border-radius: 50px;
    background-color: $smoky-white;
    border: 1px solid transparent;
    width: 100%;

    &:focus {
      border: 1px solid $deep-purple-blue;
    }

    &--error {
      background: rgba(255, 102, 131, 0.2);
    }
  }

  &__visibility-controller {
    position: absolute;
    width: 20px;
    height: 20px;
    overflow: hidden;
    right: 16px;
    top: 10px;
    cursor: pointer;
  }

  &__visibility-controller-icon {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &__error-message {
    color: $error-message;
    font-weight: 400;
    font-size: 10px;
    line-height: 200%;
    margin-top: 2px;
    padding: 0 18px;
    max-width: 225px;
  }
}
</style>
