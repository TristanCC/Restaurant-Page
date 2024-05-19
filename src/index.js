import "./styles.css";
import { renderNav } from "./header"
import { renderFooter } from "./footer.js";
import { renderHome } from "./home.js";
import { renderMenu } from "./menu.js";
//import { renderHome} from "./home.js"

//const $body = document.querySelector("body");
//const $content = document.getElementById("content");
//$body.insertBefore(renderNav(), $content);
//$body.appendChild(renderFooter());
const $wrapper = document.querySelector(".wrapper")
const $content = document.getElementById("content")

renderNav()
renderFooter()
renderHomePage()

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

function animatePlease() {

}


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


export {$wrapper, $content}


//function home() {
//    renderNav()
//    //renderHome()
//    renderFooter()
//}

//home()