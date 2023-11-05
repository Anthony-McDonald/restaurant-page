import _ from 'lodash';
import './styles.css';

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

    // button1.addEventListener("click", switchTo('home'));
    // button2.addEventListener("click", switchTo('menu'));
    // button3.addEventListener("click", switchTo('contact'));

    button_div.appendChild(button1);
    button_div.appendChild(button2);
    button_div.appendChild(button3);

    const main_text_1 = document.createElement('h3');
    main_text_1.textContent = "This restaurant is amazing, gosh the food is so scrumptious"
    const main_text_2 = document.createElement('h3');
    main_text_2.textContent = "If you don't believe me, just look at our chef!";
    const chef_img = document.createElement('img');
    chef_img.src = "../chef.jpg"
    main.appendChild(button_div);
    main.appendChild(main_text_1);
    main.appendChild(main_text_2);
    main.appendChild(chef_img);

    const footer = document.createElement('div');
    footer.classList.add("footer");
    footer.textContent = "Anthony McDonald - The Odin Project";


    element.appendChild(header);
    element.appendChild(main);
    element.appendChild(footer);

    // const element = document.createElement('div');

    // const btn = document.createElement('button');
  
    //  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    // btn.innerHTML = 'Click me and check the console!';
  
    // btn.onclick = console.log("logging");
  
  
    // element.appendChild(btn);



    return element
}

function switchTo(toSwitchTo) {
    main_div = document.querySelector(".main");

    switch(toSwitchTo) {
        case 'home':
            console.log('home');
            break;
        case 'menu':
            console.log('menu');
            break;
        case "contact":
            console.log('contact');
            break;
    }

}


document.body.appendChild(component());