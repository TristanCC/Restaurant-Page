import "./styles.css";
import { renderNav } from "./header"
import { renderFooter } from "./footer.js";
import { renderHome } from "./home.js";
import { renderMenu } from "./menu.js";
//import { renderHome} from "./home.js"

const $wrapper = document.querySelector(".wrapper")
const $content = document.getElementById("content")
const $toggleButton = document.getElementById("toggleButton");
const $sidebar = document.querySelector(".sidebar");
const $video = document.querySelector(".soup-video")

renderNav()
renderFooter()
renderHomePage()
window.scrollTo(0,2)
function renderHomePage() {
    $content.innerHTML = "";
    renderHome()
}

function renderMenuPage() {
    $content.innerHTML = "";
    renderMenu()
}


function renderAboutPage() {
    $content.innerHTML = "";
    renderAbout()
}

function renderContactPage() {
    $content.innerHTML = "";
    renderContact()
}

$sidebar.style.visibility = 'hidden'

$toggleButton.addEventListener(('click'), () => {
    if ($sidebar.style.width === '50%') {
        $sidebar.style.width = '0'
        $sidebar.style.visibility = 'hidden'
    }
    else {
        $sidebar.style.width = '50%'
        $sidebar.style.visibility = 'visible'
    }
})

window.addEventListener('click',(e) => {
    if (!e.target.classList.contains('sidebar') && $sidebar.style.width != 0 && !e.target.classList.contains('toggle-button')) {
        $sidebar.style.width = 0
    }
})

const $buttons = document.querySelectorAll("button")
$buttons.forEach((button) => {
    button.addEventListener(("click"), () => {
        switch (button.id) {
            case "home":
                renderHomePage()
                break
            case "menu":
                renderMenuPage()
                break
            case "about":
                renderAboutPage()
                break
            case "contact":
                renderContactPage()
                break
        }
    })
})

$video.addEventListener("ended", () => {
    $video.style.minWidth = "0"
    $video.style.maxWidth = "0"
})


export {$wrapper, $content, $sidebar}


//function home() {
//    renderNav()
//    //renderHome()
//    renderFooter()
//}

//home()