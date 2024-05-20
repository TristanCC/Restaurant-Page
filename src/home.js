import { $content } from "./index"

function render() {
    const $centerContent = document.createElement("h1")
    $centerContent.textContent = "Good Soup Cafe."
    $centerContent.classList.add("hero")
    $content.appendChild($centerContent)
}

export { render as renderHome }