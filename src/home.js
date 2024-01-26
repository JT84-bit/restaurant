function home() {
    const content = document.querySelector("#content");

    const textDiv = document.createElement('div')
    const homeDiv = document.createElement('div');
    const welcome = document.createElement('p');
    const text = document.createElement('p');
    const refer = document.createElement("p")

    refer.classList.add("refer")
    textDiv.classList.add("textDiv")
    homeDiv.classList.add ('homeDiv');
    welcome.classList.add('welcome');
    text.classList.add('text');

    refer.textContent = "Image by Madun Digital from Pixabay"
    welcome.innerHTML = 'Welcome to<br>Smile and Sunshine';
    text.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloremque rerum \
                    eius id quibusdam ex fugit sapiente voluptates ipsam molestiae.<br><br> \
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloremque rerum \
                    eius id quibusdam ex fugit sapiente voluptates ipsam molestiae.<br><br>\
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloremque rerum \
                    eius id quibusdam ex fugit sapiente voluptates ipsam molestiae.<br><br> \
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloremque rerum \
                    eius id quibusdam ex fugit sapiente voluptates ipsam molestiae."
    textDiv.append(text);

    homeDiv.append(welcome, textDiv, refer);
    content.append(homeDiv);
};

export {home}