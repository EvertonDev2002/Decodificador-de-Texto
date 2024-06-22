export function decoderString(text, obj) {
  let modifiedText = text
  Object.keys(obj).forEach((key) => {
    modifiedText = modifiedText.replace(new RegExp(key, "g"), obj[key])
  })
  return modifiedText
}
