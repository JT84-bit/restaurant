function menu (){

    const content = document.querySelector("#content");

    const firstItem = document.createElement("div");
    const firstTitle = document.createElement("p");
    const firstDescription = document.createElement("span");
    firstItem.classList.add("item");
    firstTitle.classList.add("title");
    firstDescription.classList.add("description")
    firstTitle.textContent = "American pancakes";
    firstDescription.textContent = "Easy, American-style, fluffy pancakes are great for feeding a \
    crowd at breakfast or brunch. Top with something sweet like fruit, jam or syrup, or rashers of crispy bacon."
    firstItem.appendChild(firstTitle);
    firstItem.appendChild(firstDescription);

    const secondItem = document.createElement("div");
    const secondTitle = document.createElement("p");
    const secondDescription = document.createElement("span");
    secondItem.classList.add("item");
    secondTitle.classList.add("title");
    secondDescription.classList.add("description")
    secondTitle.textContent = "Apple and Maple Baked Oatmeal";
    secondDescription.textContent = " Sweetened with just a kiss of maple syrup, this healthy \
    apple baked oatmeal is the ultimate fall breakfast."
    secondItem.appendChild(secondTitle);
    secondItem.appendChild(secondDescription);

    const thirdItem = document.createElement("div");
    const thirdTitle = document.createElement("p");
    const thirdDescription = document.createElement("span");
    thirdItem.classList.add("item");
    thirdTitle.classList.add("title");
    thirdDescription.classList.add("description")
    thirdTitle.textContent = "Sour Cream Coffee Cake";
    thirdDescription.textContent = "Moist and tender, with a coconut-speckled crumb topping, \
    this sour cream coffee cake is delicious and—bonus!—can easily be made gluten free."
    thirdItem.appendChild(thirdTitle);
    thirdItem.appendChild(thirdDescription);

    const fourthItem = document.createElement("div");
    const fourthTitle = document.createElement("p");
    const fourthDescription = document.createElement("span");
    fourthItem.classList.add("item");
    fourthTitle.classList.add("title");
    fourthDescription.classList.add("description")
    fourthTitle.textContent = "Fresh tomato soup";
    fourthDescription.textContent = "This rich and creamy Dutch tomato soup, made with very \
    ripe plum or vine tomatoes, was inspired by the delicious bowl of tomato soup served at Café de Jaren in Amsterdam."
    fourthItem.appendChild(fourthTitle);
    fourthItem.appendChild(fourthDescription);

    const fifthItem = document.createElement("div");
    const fifthTitle = document.createElement("p");
    const fifthDescription = document.createElement("span");
    fifthItem.classList.add("item");
    fifthTitle.classList.add("title");
    fifthDescription.classList.add("description")
    fifthTitle.textContent = "Chicken noodle soup";
    fifthDescription.textContent = "This slurp-able bowl of spicy coconut noodles with chicken \
    was inspired by classic Thai red curry. The freshness of the DIY curry paste will help ward off any winter blues."
    fifthItem.appendChild(fifthTitle);
    fifthItem.appendChild(fifthDescription);

    const sixthItem = document.createElement("div");
    const sixthTitle = document.createElement("p");
    const sixthDescription = document.createElement("span");
    sixthItem.classList.add("item");
    sixthTitle.classList.add("title");
    sixthDescription.classList.add("description")
    sixthTitle.textContent = "Club sandwich";
    sixthDescription.textContent = "This layered sandwich, a favourite of gastro-pubs across the country, makes a tasty meal for one"
    sixthItem.appendChild(sixthTitle);
    sixthItem.appendChild(sixthDescription);

    content.append(firstItem);
    content.append(secondItem);
    content.append(thirdItem);
    content.append(fourthItem);
    content.append(fifthItem);
    content.append(sixthItem);
}

export {menu}