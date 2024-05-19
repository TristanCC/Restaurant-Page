import { $content } from "./index"

const soups = ["Tonkatsu Ramen", "Miso Ramen", "Shoyu Ramen", "Chicken Ramen", "Pho"]

function render() {
    
    const $menu = document.createElement("div")
    $menu.classList.add("menu")

    soups.forEach((soup) => {
        let $soupElement = document.createElement("h2")
        $soupElement.textContent = `${soup}`
        $menu.appendChild($soupElement)
    })

    $content.appendChild($menu)
}

export { render as renderMenu }