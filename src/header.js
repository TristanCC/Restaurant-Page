import { $wrapper, $content, $sidebar } from "./index";

function render() {
    const navItems = ["home", "menu", "about", "contact"];

    // Create navbar buttons
    const $navbarUl = document.createElement("ul");
    $navbarUl.classList.add("nav-list");

    // Create sidebar buttons
    const $sidebarUl = document.createElement("ul");
    $sidebarUl.classList.add("nav-side");

    navItems.forEach((item) => {
        // Navbar button
        const $navbarButton = document.createElement("button");
        $navbarButton.id = `${item}`;
        $navbarButton.textContent = item;
        $navbarUl.appendChild($navbarButton);

        // Sidebar button
        const $sidebarButton = $navbarButton.cloneNode(true);
        $sidebarUl.appendChild($sidebarButton);
    });

    const $nav = document.createElement("nav");
    $nav.appendChild($navbarUl);
    $nav.classList.add("nav");

    $wrapper.insertBefore($nav, $content);
    $sidebar.appendChild($sidebarUl);
}

export { render as renderNav };