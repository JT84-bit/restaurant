function contact() {
    const content = document.querySelector("#content");

    const contactDiv = document.createElement('div');
    const tel = document.createElement('p');
    const adress = document.createElement('p');

    contactDiv.classList.add ('contact-page');
    tel.classList.add('tel');
    adress.classList.add('adress');

    tel.textContent = 'Phone: 111 222 333';
    adress.textContent = 'Adress: Coffeeshop Street 123';

    contactDiv.append(tel, adress);
    content.append(contactDiv);
};

export {contact}