export function createCardBlock(cardColor, colorCardWording, colorButtonCardWording, mainTitleCard, descriptionCard, buttonCardContent) {

    // Create a div element with class "card" and set its width and backgroundColor
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    //cardDiv.style.width = cardWidth+"px";
    cardDiv.style.backgroundColor = cardColor

    // Create a div element with class "card-main-title" and set its text content
    const mainTitleDiv = document.createElement("div");
    mainTitleDiv.className = "card-main-title";
    mainTitleDiv.textContent = mainTitleCard;
    mainTitleDiv.style.color = colorCardWording;

    // Create a div element with class "card-description" and set its text content
    const descriptionDiv = document.createElement("div");
    descriptionDiv.className = "card-description";
    descriptionDiv.textContent = descriptionCard;
    descriptionDiv.style.color = colorCardWording;

    // Create a div element with class "card-btn-learn-more" and set its text content
    const learnMoreDiv = document.createElement("div");
    learnMoreDiv.className = "card-btn-learn-more";
    learnMoreDiv.textContent = buttonCardContent;
    learnMoreDiv.style.color = colorButtonCardWording;

    // Append the created elements to the document body (or another container)
    cardDiv.appendChild(mainTitleDiv);
    cardDiv.appendChild(descriptionDiv);
    cardDiv.appendChild(learnMoreDiv);

    // Append the cardDiv to a container in your HTML (e.g., a div with an id)
    const container = document.getElementById("container"); // Replace "container" with your actual container ID
    console.log('createCardBlock')
    container.appendChild(cardDiv);

}