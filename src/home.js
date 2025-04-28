
import img from "./images/homepagefood.jpg";

export function loadHome(content) {
    content.innerHTML = `
        
    <div id="home-container">
            <div id="left-side">
                <h1 class="tagline">You like to eat.</h1>
                <p class="paragraph">Hamburger Pancake Pizza Sushi Hot Dog. Cheeseburger Steak Green Beans Dinner Roll, Chicken Katsu. Panini. French Fries, Ranch, Ice Cream. Hamburger Pancake Pizza Sushi Hot Dog. Cheeseburger Steak Green Beans Dinner Roll, Chicken Katsu. Panini. French Fries, Ranch, Ice Cream.</p>
            </div>
            <div id="right-side">
                <img src=${img} alt="">
            </div>
        </div>
    `

    content.appendChild(container);

}