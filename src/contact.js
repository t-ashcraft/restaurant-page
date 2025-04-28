import img from "./images/footerlogo.png";


export function loadContact(content) {
    content.innerHTML = `
        <div id="contact-container">
            <div id="left-contact">
                <img src=${img} alt="" class="left-img">
            </div>
            <div id="right-contact">
                <h2 class="contact-title">Contact Us!</h2>
                <p class="contact-info">Call us at (555) 555-5555 or email us at restaurant@restaurant.com</p>
            </div>
        </div>`
}