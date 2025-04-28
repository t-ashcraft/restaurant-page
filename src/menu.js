import imgBurger from "./images/burger.jpg";
import imgPasta from "./images/pasta.jpg";
import imgTacos from "./images/tacos.jpg";
import imgLasagna from "./images/lasagna.jpg";
import imgPizza from "./images/pizza.jpg";
import imgBurger2 from "./images/burger2.jpg";



export function loadMenu(content) {
    let menuContainer = document.createElement("div");
    menuContainer.id = "menu-container"
    menuContainer.innerHTML = `
        <div class="menu-item">
            <img src=${imgBurger} alt="" class="menu-img">
            <h2 class="menu-title">Hamburger</h2>
            <p class="menu-description">delicious burger</p>
            <h3 class="menu-price">$123.99</h3>
        </div>
        <div class="menu-item">
            <img src=${imgPasta} alt="" class="menu-img">
            <h2 class="menu-title">Fettucine Alfredo</h2>
            <p class="menu-description">with or without chicken</p>
            <h3 class="menu-price">$123.99</h3>
        </div>
        <div class="menu-item">
            <img src=${imgTacos} alt="" class="menu-img">
            <h2 class="menu-title">Tacos</h2>
            <p class="menu-description">chicken or beef</p>
            <h3 class="menu-price">$123.99</h3>
        </div>
        <div class="menu-item">
            <img src=${imgPizza} alt="" class="menu-img">
            <h2 class="menu-title">Pizza</h2>
            <p class="menu-description">cheese, pepperoni or vegetable</p>
            <h3 class="menu-price">$123.99</h3>
        </div>
        <div class="menu-item">
            <img src=${imgLasagna} alt="" class="menu-img">
            <h2 class="menu-title">Lasagna</h2>
            <p class="menu-description">yummy lasagna</p>
            <h3 class="menu-price">$123.99</h3>
        </div>
        <div class="menu-item">
            <img src=${imgBurger2} alt="" class="menu-img">
            <h2 class="menu-title">Hamburger Again</h2>
            <p class="menu-description">but with bacon</p>
            <h3 class="menu-price">$123.99</h3>
        </div>`
    content.appendChild(menuContainer);
}
