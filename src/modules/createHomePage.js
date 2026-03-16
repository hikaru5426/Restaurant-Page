export {createHomePage};

function createHomePage() {
    const contentDiv = document.getElementById("content");
    const title = document.createElement("h1");
    title.textContent = "La Bella Tavola - Italian Restaurant";

    const text = document.createElement("p");
    text.textContent = "Welcome to La Bella Tavola, where every meal is a celebration of flavor and tradition.Nestled in the heart of the city, our restaurant brings you the finest recipes passed down through generations, crafted with locally sourced ingredients and a whole lot of love."


    const hours = document.createElement("div");
    hours.classList.add("homeMajorElement");
    hours.id = "hoursDiv";

    const titleHours = document.createElement("h2");

    titleHours.textContent = "Hours";
    const days = ["Monday: 11am - 10pm", "Tuesday 11am - 10pm", "Wednesday: 11am - 10pm", "Thursday: 11am - 10pm", "Friday: 11am - 12am", "Saturday: 9am - 12am", "Sunday: 9am - 12am"];
    const hoursList = document.createElement("ul");
    days.forEach((day) =>{
        const li = document.createElement("li");
        li.textContent = day;
        hoursList.appendChild(li);
    });
    hours.append(titleHours, hoursList);

    const location = document.createElement("div");
    const locationTitle = document.createElement("h2");
    locationTitle.textContent = "Location";
    const locationText = document.createElement("p");
    locationText.textContent = "123 Forest Drive, Forestville, Maine";
    location.append(locationTitle, locationText);
    location.classList.add("homeMajorElement");

    contentDiv.append(title, text, hours, location);
}