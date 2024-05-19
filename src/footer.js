import { $wrapper } from "./index.js"
function render() {
    const $footerText = document.createElement("h3")
    $footerText.textContent = "Made with ♡ by Tristan Johnston"
    $footerText.classList.add("footer")
    $wrapper.appendChild($footerText)
}

export { render as renderFooter }