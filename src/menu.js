import { $content } from "./index"

// would be replaced with database

var soups = [{name: "Tonkatsu Ramen", description: "Pork broth, noodles, egg, mushrooms", cost: '$8.95'}];
for(let i=0; i<3; i++){
    soups = soups.concat(soups); 
    console.log(soups)
}


    function render() {
        const $menuContainer = document.createElement("div");
        $menuContainer.classList.add("menu-container");
    
        soups.forEach((soup) => {
            // Create a container for each soup item
            let $soupItem = document.createElement("div");
            $soupItem.classList.add("soup-item");
    
            // Create and append the name and cost elements
            let $soupName = document.createElement("h2");
            $soupName.textContent = soup.name;
            let $soupDesc = document.createElement("p")
            $soupDesc.classList.add("soup-description")
            $soupDesc.textContent = soup.description
            let $soupCost = document.createElement("h3");
            $soupCost.textContent = soup.cost;
    
            // Append the name and cost to the soup item container
            $soupItem.appendChild($soupName);
            $soupItem.appendChild($soupDesc)
            $soupItem.appendChild($soupCost);
    
            // Append the soup item to the menu container
            $menuContainer.appendChild($soupItem);
        });
    
        // Append the menu container to the content
        $content.appendChild($menuContainer);
    }
    
    export { render as renderMenu };