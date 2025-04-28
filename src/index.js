const body = document.querySelector("body");

const header = document.createElement("div");
const footer = document.createElement("div");
const main = document.createElement("div");

function createPage() {
    header.id = "header";
    footer.id = "footer";
    main.id = "main";


    body.appendChild(header);
    body.appendChild(main);
    body.appendChild(footer);
}

