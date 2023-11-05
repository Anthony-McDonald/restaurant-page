export default function menuMain() {
    const menuMain = document.createElement('div');
    menuMain.classList.add("main");
    const main_text_1 = document.createElement('h3');
    main_text_1.textContent = "Pizza"

    const pizzaImg1 = document.createElement('img');
    pizzaImg1.src = "../chef.jpg"

    const main_text_2 = document.createElement('h3');
    main_text_2.textContent = "More Pizza";


    const pizzaImg2 = document.createElement('img');
    pizzaImg2.src = "../chef.jpg"

    const main_text_3 = document.createElement('h3');
    main_text_3.textContent = "Really Just A Lot Of Overpriced Pizza";


    const pizzaImg3 = document.createElement('img');
    pizzaImg3.src = "../chef.jpg"





    const chef_img = document.createElement('img');
    chef_img.src = "../chef.jpg"

    menuMain.appendChild(main_text_1);
    menuMain.appendChild(pizzaImg1);
    menuMain.appendChild(main_text_2);
    menuMain.appendChild(pizzaImg2);
    menuMain.appendChild(main_text_3);
    menuMain.appendChild(pizzaImg3);
    menuMain.appendChild(chef_img);

    return menuMain;
}