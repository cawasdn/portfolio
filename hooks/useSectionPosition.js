const useSectionPosition = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight
  const scrolled = window.scrollY

  console.log(scrolled)

  return () => scrolled
}

export default useSectionPosition
