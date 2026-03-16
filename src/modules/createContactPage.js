export {createContactPage};

function createContactPage(){
    const contentDiv = document.getElementById("content");
    contentDiv.classList.add("reducedWidth");
    const title = document.createElement("h1");
    title.textContent = "Contact";


    const ownerDiv = document.createElement("div");
    const ownerTitle = document.createElement("h2");
    ownerTitle.textContent = "Owner";
    const ownerText = document.createElement("p");
    ownerText.innerHTML = "Patrick OLLIGAN<br>06 27 10 62 54<br>patrickOlligan@gmail.com";
    ownerDiv.classList.add("centered");
    ownerDiv.append(ownerTitle, ownerText);

    const lawyerDiv = document.createElement("div");
    const lawyerTitle = document.createElement("h2");
    lawyerTitle.textContent = "Lawyer";
    const lawyerText = document.createElement("p");
    lawyerText.innerHTML = "Jack OSTER<br>06 57 24 13 94<br>jackOster@gmail.com";
    lawyerDiv.classList.add("centered");
    lawyerDiv.append(lawyerTitle, lawyerText);

    contentDiv.append(title, ownerDiv, lawyerDiv);
}