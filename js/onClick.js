import { decoderString } from "./decoder.js"

const noMessagesFound = document.querySelector(".no-messages-found ")
const messageFound = document.querySelector(".message-found")


export function onClick(button, cryptography, toCopy, toPaste) {
  button.addEventListener("click", () => {
    if (noMessagesFound.id !== "none") {
      noMessagesFound.id = "none"
      messageFound.id = ""
    }
    toPaste.innerHTML = decoderString(toCopy.value, cryptography)
  })
}
