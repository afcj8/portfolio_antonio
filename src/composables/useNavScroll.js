import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useNavScroll(sectionIds = []) {
  const scrolled = ref(false)
  const activeSection = ref('')

  let sectionObserver = null

  const handleScroll = () => {
    scrolled.value = window.scrollY > 20
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) sectionObserver.observe(el)
    })
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
    if (sectionObserver) sectionObserver.disconnect()
  })

  return { scrolled, activeSection }
}
