// Function to create a carousel slide element
function createCarouselSlide(slideNumber, imageSrc, altText, titleText, subtitleText, buttonText, buttonColor, buttonWordingColor) {

   // Create a div element for the carousel slide
    const carouselSlide = document.createElement('div');
    carouselSlide.className = 'carousel-slide';
    carouselSlide.style.display = slideNumber === 1 ? 'block' : 'none';

    // Create an img element for the slide image
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = altText;

    // Create a div element for the carousel-slide-flex-display
    const slideFlexDisplay = document.createElement('div');
    slideFlexDisplay.className = 'carousel-slide-flex-display';

    // Create a div element for the carousel caption
    const caption = document.createElement('div');
    caption.className = 'carousel-caption';

    // Create a div element for the caption title
    const captionTitle = document.createElement('div');
    captionTitle.className = 'carousel-caption-title';
    captionTitle.textContent = titleText;

    // Create a div element for the caption subtitle
    const captionSubtitle = document.createElement('div');
    captionSubtitle.className = 'carousel-caption-subtitle';
    captionSubtitle.textContent = subtitleText;

    // Create a button element for the caption button
    const captionButton = document.createElement('button');
    captionButton.className = 'carousel-caption-btn';
    captionButton.textContent = buttonText;
    captionButton.style.backgroundColor = buttonColor;
    captionButton.style.color = buttonWordingColor;

    // Append the elements to build the structure
    caption.appendChild(captionTitle);
    caption.appendChild(captionSubtitle);
    caption.appendChild(captionButton);

    slideFlexDisplay.appendChild(caption);

    carouselSlide.appendChild(img);
    carouselSlide.appendChild(slideFlexDisplay);
  
    return carouselSlide;
  }
  function createSlideArrows(carouselArrowsColor){
    // Create the previous arrow element
    const prevArrow = document.createElement('div');
    prevArrow.className = 'carousel-arrow prev';
    prevArrow.textContent = '❮';
    prevArrow.style.color= carouselArrowsColor;
    prevArrow.onclick = () => changeSlideExtended(-1);

    // Create the next arrow element
    const nextArrow = document.createElement('div');
    nextArrow.className = 'carousel-arrow next';
    nextArrow.textContent = '❯';
    nextArrow.style.color= carouselArrowsColor;
    nextArrow.onclick = () => changeSlideExtended(1);

    return [prevArrow,nextArrow]
  }

  // Function to create slide indicators (dots)
  function createSlideIndicator(slideNumber, carouselIndicatorsActiveColor, carouselIndicatorsInactiveColor) {
    const indicator = document.createElement('span');
    indicator.className = 'indicator';
    if (slideNumber === 1) {
      indicator.className += ' active';
    }
      /*indicator.style.backgroundColor = carouselIndicatorsActiveColor
    }else{
        indicator.style.backgroundColor = carouselIndicatorsInactiveColor
    }*/
    indicator.onclick = function () {
      currentSlideExtended(slideNumber);
    };
    return indicator;
  }
  
  // Function to generate the entire carousel
  export function generateCarouselExtendedVersion(
    carouselExtendedVersionImg1,
    carouselExtendedVersionImg2,
    carouselExtendedVersionImg3,
    carouselMainTitleWording1,
    carouselMainTitleWording2,
    carouselMainTitleWording3,
    carouselMainSubtitleWording1,
    carouselMainSubtitleWording2,
    carouselMainSubtitleWording3,
    carouselButtonWording1,
    carouselButtonWording2,
    carouselButtonWording3,
    carouselButtonColor1,
    carouselButtonColor2,
    carouselButtonColor3,
    carouselButtonWordingColor1,
    carouselButtonWordingColor2,
    carouselButtonWordingColor3,
    carouselArrowsColor,
    displayCarouselCircleShapeIndicators,
    displayCarouselFadeTransition
  )
  {
  
    const slidesData = [
      {
        imageSrc: carouselExtendedVersionImg1,
        altText: 'Slide 1',
        titleText: carouselMainTitleWording1,
        subtitleText: carouselMainSubtitleWording1,
        buttonText: carouselButtonWording1,
        buttonColor: carouselButtonColor1,
        buttonWordingColor: carouselButtonWordingColor1,
      },
      {
        imageSrc: carouselExtendedVersionImg2,
        altText: 'Slide 2',
        titleText: carouselMainTitleWording2,
        subtitleText: carouselMainSubtitleWording2,
        buttonText: carouselButtonWording2,
        buttonColor: carouselButtonColor2,
        buttonWordingColor: carouselButtonWordingColor2,
      },
      {
        imageSrc: carouselExtendedVersionImg3,
        altText: 'Slide 3',
        titleText: carouselMainTitleWording3,
        subtitleText: carouselMainSubtitleWording3,
        buttonText: carouselButtonWording3,
        buttonColor: carouselButtonColor3,
        buttonWordingColor: carouselButtonWordingColor3,
      },
      // Add more slides here if needed
    ];
  
    slidesData.forEach((slideData, index) => {
      const slideNumber = index + 1;
      const slide = createCarouselSlide(
        slideNumber,
        slideData.imageSrc,
        slideData.altText,
        slideData.titleText,
        slideData.subtitleText,
        slideData.buttonText,
        slideData.buttonColor,
        slideData.buttonWordingColor
      );

      
      document.querySelector('.carousel-indicators').insertAdjacentElement('beforebegin',slide);
      const indicator = createSlideIndicator(slideNumber);
      document.querySelector('.carousel-indicators').appendChild(indicator);
      
    });
    const arrows = createSlideArrows(carouselArrowsColor);
    document.querySelector('.carousel-indicators').insertAdjacentElement('beforebegin',arrows[0])
    document.querySelector('.carousel-indicators').insertAdjacentElement('beforebegin',arrows[1])
    
    if(displayCarouselCircleShapeIndicators){
        document.querySelectorAll('.indicator').forEach((ele)=>{
            ele.style.height="20px";
            ele.style.width="20px";
            ele.style.borderRadius="50%";
            ele.style.marginRight="10px";
        })
    }

    if(displayCarouselFadeTransition){
        document.querySelectorAll('.carousel-slide').forEach((ele)=>{ele.classList.add("fade")})
    }
    /*let slideIndexSplit = 1;
    showSlideSplit(slideIndexSplit);*/
  }

  export function getIndicatorsActiveColor(carouselIndicatorsActiveColor){
    return carouselIndicatorsActiveColor
  }

  export function getIndicatorsInactiveColor(carouselIndicatorsInactiveColor){
    return carouselIndicatorsInactiveColor
  }

  export function getAutomaticSlideshow(carouselAutomaticSlideshow){
    if(carouselAutomaticSlideshow){
        // Auto-advance the slides (optional)
        setInterval(() => {
            changeSlideExtended(1);
        }, 5000); // Change slides every 5 seconds *
    }
  }





    // Define the JavaScript functions for changing and navigating slides (changeSlideSplit, currentSlideSplit)
    let slideIndex = 1;

        setTimeout(() => {
            showSlideExtended(slideIndex);
        }, 2000); 
    
    
    function changeSlideExtended(n) {
        showSlideExtended(slideIndex += n);
    }
    
    function currentSlideExtended(n) {
        showSlideExtended(slideIndex = n);
    }
    
    function showSlideExtended(n) {
        if(document.getElementsByClassName("carousel-slide").length>0){
            const slides = document.getElementsByClassName("carousel-slide");
            const indicators = document.getElementsByClassName("indicator");
            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (let i = 0; i < indicators.length; i++) {
                indicators[i].className = indicators[i].className.replace(" active", "");
                indicators[i].style.backgroundColor=getIndicatorsInactiveColor()
            }
            slides[slideIndex - 1].style.display = "block";
            indicators[slideIndex - 1].className += " active";
            indicators[slideIndex - 1].style.backgroundColor=getIndicatorsActiveColor()
        }
        
    }
    

  