import { onMounted, onUnmounted } from 'vue'

export default function useClickOutside(element_ref, callback) {
  if (element_ref && typeof callback === 'function') {
    let listener = (e) => {
      if (!e.target === element_ref.value || !e.composedPath().includes(element_ref.value)) {
        callback()
      }
    }

    onMounted(() => {
      window.addEventListener('click', listener)
    })

    onUnmounted(() => {
      window.removeEventListener('click', listener)
    })
  }
}
