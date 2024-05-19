import "./styles.css";
import { renderNav } from "./header"
import { renderFooter } from "./footer.js";
import { renderHome } from "./home.js";
//import { renderHome} from "./home.js"

//const $body = document.querySelector("body");
//const $content = document.getElementById("content");
//$body.insertBefore(renderNav(), $content);
//$body.appendChild(renderFooter());
const $wrapper = document.querySelector(".wrapper")
const $content = document.getElementById("content")

renderNav()
renderHome()
renderFooter()
export {$wrapper, $content}


//function home() {
//    renderNav()
//    //renderHome()
//    renderFooter()
//}

//home()