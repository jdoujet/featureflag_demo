export function createIntroductionContent(swapIntroductionContent){
    // Create a div element with class "introduction-title"
    const introductionTitleDiv = document.createElement("div");
    introductionTitleDiv.className = "introduction-title";

    // Create a div element with class "introduction-title-main" and set its text content
    const mainTitleDiv = document.createElement("div");
    mainTitleDiv.className = "introduction-title-main";
    mainTitleDiv.textContent = "What are Feature Flags?";

    // Create a div element with class "introduction-title-sub" and set its text content
    const subTitleDiv = document.createElement("div");
    subTitleDiv.className = "introduction-title-sub";
    subTitleDiv.textContent = "Everything you need to know";

    // Create a button element with class "introduction-title-learn-more" and set its text content
    const learnMoreButton = document.createElement("button");
    learnMoreButton.className = "introduction-title-learn-more";
    learnMoreButton.textContent = "LEARN MORE";

    // Append the created elements to the document body (or another container)
    introductionTitleDiv.appendChild(mainTitleDiv);
    introductionTitleDiv.appendChild(subTitleDiv);
    introductionTitleDiv.appendChild(learnMoreButton);

    // Create an img element with the specified src, width, and height
    const imgElement = document.createElement("img");
    imgElement.src = "https://www.kameleoon.com/sites/default/files/2023-02/Pillar%20Page%20Header%20Illustration_0.svg";
    imgElement.width = 430;
    imgElement.height = 350;

    // Get parent container and add elements to it
    const container = document.getElementById("container-introduction"); // Replace "container" with your actual container ID
    console.log(swapIntroductionContent)
    console.log(typeof swapIntroductionContent)
    if(swapIntroductionContent){
        container.appendChild(imgElement);
        container.appendChild(introductionTitleDiv);
    }else{
        container.appendChild(introductionTitleDiv);
        container.appendChild(imgElement);
    }

}

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
    container.appendChild(cardDiv);

}