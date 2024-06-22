import { copyText } from "./copyText.js"
import { invertKeysAndValues } from "./invertKeysAndValues.js"
import { onClick } from "./onClick.js"

const encrypt = document.querySelector("#encrypt")
const decrypt = document.querySelector("#decrypt")
const copyButton = document.querySelector("#copy")
const displayText = document.querySelector("#textToCopy")
const textToDecode = document.getElementById("decodingText")

const cryptography = { e: "enter", i: "imes", a: "ai", o: "ober", u: "ufat" }
const newCryptography = invertKeysAndValues(cryptography)

copyText(copyButton, displayText)
onClick(encrypt, cryptography, textToDecode, displayText)
onClick(decrypt, newCryptography, textToDecode, displayText)
