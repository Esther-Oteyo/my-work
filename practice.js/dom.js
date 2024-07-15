const test = document.getElementById('test');

test.innerHTML = "My Name Is Essy"

//creating new elements
const newitem = document.createElement("h1");
const headingtitle = document.createTextNode("This Is A New Element"); 
newitem.appendChild(headingtitle);
const printToDom = document.getElementById("newElement");
printToDom.appendChild(newitem);

// Favorite Dish
const dishElement = document.createElement("h2");
const dishText = document.createTextNode("Favorite Dish: Sushi");
dishElement.appendChild(dishText);
const printdish= document.getElementById("favDish");
printdish.appendChild(dishElement);


// Favorite Pets
const petsElement = document.createElement("h2");
const petsText = document.createTextNode("Favorite Pets: Dogs and Cats");
petsElement.appendChild(petsText)
const printpets= document.getElementById("favpets");
printpets.appendChild(petsElement);

// Favorite Color
const colorElement = document.createElement("h2");
const colorText = document.createTextNode("Favorite Color: Blue");
colorElement.appendChild(colorText);
const printcolour= document.getElementById("favcolour");
printcolour.appendChild(colorElement);

