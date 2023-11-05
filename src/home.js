export default function homeMain() {
    
    const homeMain = document.createElement('div');
    homeMain.classList.add("main");
    const main_text_1 = document.createElement('h3');
    main_text_1.textContent = "This restaurant is amazing, gosh the food is so scrumptious"
    const main_text_2 = document.createElement('h3');
    main_text_2.textContent = "If you don't believe me, just look at our chef!";
    const chef_img = document.createElement('img');
    chef_img.src = "./chef.jpg"

    homeMain.appendChild(main_text_1);
    homeMain.appendChild(main_text_2);
    homeMain.appendChild(chef_img);

    return homeMain;
}