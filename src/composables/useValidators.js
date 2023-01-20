import { defineRule } from 'vee-validate'

//passwordValidation

let usePasswordValidator = () => {
  return defineRule('passwordValidation', (value) => {
    let regexp = /^(?=.{8,})(?=.*[a-z])(?=(.*[A-Z]){2})(?=.*[@#$%^&+=]).*$/
    if (!value) {
      return 'This field is required'
    }
    if (!regexp.test(value.toString())) {
      return 'Password must contain 8+ symbols, 1 special and 2 capital letters'
    }
    return true
  })
}

//confirmedValidation

let useConfirmedValidator = () => {
  return defineRule('confirmedValidation', (value, [target], ctx) => {
    if (value === ctx.form[target]) {
      return true
    }
    return 'Passwords must match'
  })
}

//requiredValidation

let useRequiredValidator = () => {
  return defineRule('requiredValidation', (value, [target], ctx) => {
    if (!value) {
      return 'This field is required'
    }
    return true
  })
}

//emailValidation

let useEmailValidator = () => {
  return defineRule('emailValidation', (value) => {
    if (!value) {
      return 'This field is required'
    }
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    if (!regex.test(value)) {
      return 'This field must be a valid email'
    }
    return true
  })
}

export { usePasswordValidator, useConfirmedValidator, useRequiredValidator, useEmailValidator }
