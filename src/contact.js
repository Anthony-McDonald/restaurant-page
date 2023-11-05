export default function contactMain() {
    const contactMain = document.createElement('div');
    contactMain.classList.add("main");
    const main_text_1 = document.createElement('h3');
    main_text_1.textContent = "Contact us:"
    const main_text_2 = document.createElement('h3');
    main_text_2.textContent = "Giovanni Giorgio: 968375618";
    const chef_img = document.createElement('img');
    chef_img.src = "./chef.jpg"

    contactMain.appendChild(main_text_1);
    contactMain.appendChild(main_text_2);
    contactMain.appendChild(chef_img);


    return contactMain;
}