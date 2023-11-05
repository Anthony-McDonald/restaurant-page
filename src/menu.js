export default function menuMain() {

    const menuMain = document.createElement('div');
    menuMain.classList.add("main");
    const main_text_1 = document.createElement('h3');
    main_text_1.textContent = "Please have some pizza"
    const main_text_2 = document.createElement('h3');
    main_text_2.textContent = "We have so many types of pizza";
    const pizzaImg = document.createElement('img');
    pizzaImg.src = "../pizza.jpg"
    pizzaImg.classList.add("imgconstraint")

    const pizzaImg2 = document.createElement('img');
    pizzaImg2.src = "../pizza2.jpg"
    pizzaImg2.classList.add("imgconstraint")

    menuMain.appendChild(main_text_1);
    menuMain.appendChild(pizzaImg);
    menuMain.appendChild(main_text_2);
    menuMain.appendChild(pizzaImg2);



    return menuMain;
}