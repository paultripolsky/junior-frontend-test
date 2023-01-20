import { nextTick } from 'vue'

let useFocus = async (elementRef) => {
  if (elementRef.value) {
    await nextTick(() => {
      elementRef.value.focus()
    })
  }
}

export { useFocus }
