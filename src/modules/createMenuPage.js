import honeyTea from "../images/honey-tea.jpg";
import mintTea from "../images/mint-tea.jpg";
import freshFruit from "../images/fresh-fruit.jpg";
import toastAndJam from "../images/toast-and-jam.jpg";
import pancakes from "../images/pancakes.jpg";
import frenchToast from "../images/french-toast.jpg";
export{createMenuPage};

function createMenuPage(){
    const contentDiv = document.getElementById("content");
    const title = document.createElement("h1");
    title.textContent = "Menu";


    const beveragesDiv = document.createElement("div");
    const beveragesTitle = document.createElement("h2");
    beveragesTitle.textContent = "Beverages";

    const honeyTeaDiv = document.createElement("div");
    const honeyTeaTitle = document.createElement("h3");
    honeyTeaTitle.textContent = "Honey Tea";
    const honeyTeaText = document.createElement("p");
    honeyTeaText.textContent = "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!";
    const honeyTeaPrice = document.createElement("p");
    honeyTeaPrice.textContent = "2$";
    const honeyTeaImage = document.createElement("img");
    honeyTeaImage.src = honeyTea;
    honeyTeaImage.alt = "cup of tea and honey on a table";
    honeyTeaDiv.append(honeyTeaTitle, honeyTeaText, honeyTeaPrice, honeyTeaImage);
    honeyTeaDiv.classList.add("majorDiv");

    const mintTeaDiv = document.createElement("div");
    const mintTeaTitle = document.createElement("h3");
    mintTeaTitle.textContent = "Mint Tea";
    const mintTeaText = document.createElement("p");
    mintTeaText.textContent = "A fresh, soothing mint tea brewed with handpicked leaves and a touch of sweetness to refresh your senses!";
    const mintTeaPrice = document.createElement("p");
    mintTeaPrice.textContent = "3$";
    const mintTeaImage = document.createElement("img");
    mintTeaImage.src = mintTea;
    mintTeaImage.alt = "cup of mint tea on a table";
    mintTeaDiv.append(mintTeaTitle, mintTeaText, mintTeaPrice, mintTeaImage);
    mintTeaDiv.classList.add("majorDiv");

    beveragesDiv.append(beveragesTitle, honeyTeaDiv, mintTeaDiv);


    const sideDiv = document.createElement("div");
    const sideTitle = document.createElement("h2");
    sideTitle.textContent = "Side";

    const freshFruitDiv = document.createElement("div");
    const freshFruitTitle = document.createElement("h3");
    freshFruitTitle.textContent = "Fresh Fruit";
    const freshFruitText = document.createElement("p");
    freshFruitText.textContent = "A small bowl of fresh fruit, whatever we find at the market for the day.";
    const freshFruitPrice = document.createElement("p");
    freshFruitPrice.textContent = "3$";
    const freshFruitImage = document.createElement("img");
    freshFruitImage.src = freshFruit;
    freshFruitImage.alt = "bowl of fresh fruits";
    freshFruitDiv.append(freshFruitTitle, freshFruitText, freshFruitPrice, freshFruitImage);
    freshFruitDiv.classList.add("majorDiv");

    const toastAndJamDiv = document.createElement("div");
    const toastAndJamTitle = document.createElement("h3");
    toastAndJamTitle.textContent = "Toast and Jam";
    const toastAndJamText = document.createElement("p");
    toastAndJamText.textContent = "A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.";
    const toastAndJamPrice = document.createElement("p");
    toastAndJamPrice.textContent = "2$";
    const toastAndJamImage = document.createElement("img");
    toastAndJamImage.src = toastAndJam;
    toastAndJamImage.alt = "A slice of bread with jam";
    toastAndJamDiv.append(toastAndJamTitle, toastAndJamText, toastAndJamPrice, toastAndJamImage);
    toastAndJamDiv.classList.add("majorDiv");

    sideDiv.append(sideTitle, freshFruitDiv, toastAndJamDiv);


    const mainDiv = document.createElement("div");
    const mainTitle = document.createElement("h2");
    mainTitle.textContent = "Main";

    const pancakesDiv = document.createElement("div");
    const pancakesTitle = document.createElement("h3");
    pancakesTitle.textContent = "Pancakes";
    const pancakesText = document.createElement("p");
    pancakesText.textContent = "A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.";
    const pancakesPrice = document.createElement("p");
    pancakesPrice.textContent = "5$";
    const pancakesImage = document.createElement("img");
    pancakesImage.src = pancakes;
    pancakesImage.alt = "pancackes with malpe syrup";
    pancakesDiv.append(pancakesTitle, pancakesText, pancakesPrice, pancakesImage);
    pancakesDiv.classList.add("majorDiv");

    const frenchToastDiv = document.createElement("div");
    const frenchToastTitle = document.createElement("h3");
    frenchToastTitle.textContent = "French Toast";
    const frenchToastText = document.createElement("p");
    frenchToastText.textContent = "Two slices of the best french toast you will ever eat, served with our locally sourced fruits.";
    const frenchToastPrice = document.createElement("p");
    frenchToastPrice.textContent = "4$";
    const frenchToastImage = document.createElement("img");
    frenchToastImage.src = frenchToast;
    frenchToastImage.alt = "Two french toast with fruits";
    frenchToastDiv.append(frenchToastTitle, frenchToastText, frenchToastPrice, frenchToastImage);
    frenchToastDiv.classList.add("majorDiv");

    mainDiv.append(mainTitle, pancakesDiv, frenchToastDiv);


    

    contentDiv.append(title, beveragesDiv, sideDiv, mainDiv);
}