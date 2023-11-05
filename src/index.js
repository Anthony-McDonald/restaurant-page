import _ from 'lodash';
import './styles.css';
import homeMain from './home.js';
import menuMain from './menu.js';
import contactMain from './contact.js';

function component() {


    const element = document.createElement('div');
    element.id = "content";

    const header = document.createElement('div');
    header.classList.add("header");
    const header_text = document.createElement('h1');
    header_text.textContent = "McDonaldos Pizzeria";
    header.appendChild(header_text);

    const main = document.createElement('div');
    main.classList.add("main");
    const button_div = document.createElement('div');
    button_div.classList.add("btndivformat")
    const button1 = document.createElement('btn');
    button1.textContent = "Home"
    const button2 = document.createElement('btn');
    button2.innerHTML = "Menu"
    const button3 = document.createElement('btn');
    button3.textContent = "Contact"

    button1.classList.add('tabbutton');
    button2.classList.add('tabbutton');
    button3.classList.add('tabbutton');

    //Event listener tags added to buttons

    // Still need to pretty up interface and sus out switching
    // to other tabs

    // Wants to add as module so look over the print.js in the last
    // lesson

    button1.addEventListener("click", function(event) {
        buttonHandler('home');
    }) ;
    button2.addEventListener("click", function(event) {
        buttonHandler('menu');
    }) ;
    button3.addEventListener("click", function(event) {
        buttonHandler('contact');
    }) ;

    button_div.appendChild(button1);
    button_div.appendChild(button2);
    button_div.appendChild(button3);

    const main_text_1 = document.createElement('h3');
    main_text_1.textContent = "This restaurant is amazing, gosh the food is so scrumptious"
    const main_text_2 = document.createElement('h3');
    main_text_2.textContent = "If you don't believe me, just look at our chef!";
    const chef_img = document.createElement('img');
    chef_img.src = "../chef.jpg"
    header.appendChild(button_div);
    main.appendChild(main_text_1);
    main.appendChild(main_text_2);
    main.appendChild(chef_img);

    const footer = document.createElement('div');
    footer.classList.add("footer");
    footer.textContent = "Anthony McDonald - The Odin Project";


    element.appendChild(header);
    element.appendChild(main);
    element.appendChild(footer);

    return element
}

function buttonHandler(toSwitchTo) {
    console.log("called");
    clearMain();
    switch(toSwitchTo) {
        case 'home':
            document.querySelector('#content').appendChild(homeMain());
            console.log('home');
            break;
        case 'menu':
            document.querySelector('#content').appendChild(menuMain());
            break;
        case "contact":

            document.querySelector('#content').appendChild(contactMain());

            break;
    }

    document.querySelector('#content').appendChild(genFooter());

}


function clearMain() {
    document.querySelector(".main").remove();
    document.querySelector(".footer").remove();



}


function genFooter() {
    const footer = document.createElement('div');
    footer.classList.add("footer");
    footer.textContent = "Anthony McDonald - The Odin Project";

    return footer;
}


document.body.appendChild(component());