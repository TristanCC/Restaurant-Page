import { $wrapper, $content } from "./index";


function render() {
    const navItems = ["home", "menu", "about", "contact"];
    const $ul = document.createElement("ul");
    navItems.forEach((item) => {
        const $button = document.createElement("button");
        $button.id = `${item}`
        $button.textContent = item;
        $ul.appendChild($button);
    });
    const $nav = document.createElement("nav");
    $nav.appendChild($ul);
    $nav.classList.add("nav")
    
    $wrapper.insertBefore($nav, $content)
}





export { render as renderNav };