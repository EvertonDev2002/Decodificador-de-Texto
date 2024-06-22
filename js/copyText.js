export function copyText(element, toCopy) {
  element.addEventListener("click", () => {
    navigator.clipboard.writeText(toCopy.value.trim())
  })
}
