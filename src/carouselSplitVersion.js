// Function to create a carousel slide element
function createCarouselSlide(slideNumber, imageSrc, altText, titleText, subtitleText, buttonText, slideBackgroundColor, buttonColor, buttonWordingColor) {

    const slide = document.createElement('div');
    slide.className = 'carousel-split-slide';
    slide.style.display = slideNumber === 1 ? 'block' : 'none';
  
    const slideContentFlex = document.createElement('div');
    slideContentFlex.className = 'carousel-split-slide-content-flex';
  
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = altText;
  
    const flexDisplay = document.createElement('div');
    flexDisplay.className = 'carousel-split-slide-flex-display';
    flexDisplay.style.backgroundColor = slideBackgroundColor
  
    const caption = document.createElement('div');
    caption.className = 'carousel-split-caption';
  
    const title = document.createElement('div');
    title.className = 'carousel-split-caption-title';
    title.textContent = titleText;
  
    const subtitle = document.createElement('div');
    subtitle.className = 'carousel-split-caption-subtitle';
    subtitle.textContent = subtitleText;
  
    const button = document.createElement('button');
    button.className = 'carousel-split-caption-btn';
    button.textContent = buttonText;
    button.style.backgroundColor = buttonColor;
    button.style.color = buttonWordingColor;
  
    caption.appendChild(title);
    caption.appendChild(subtitle);
    caption.appendChild(button);
    flexDisplay.appendChild(caption);
    slideContentFlex.appendChild(img);
    slideContentFlex.appendChild(flexDisplay);
    slide.appendChild(slideContentFlex);
  
    return slide;
  }
  function createSlideArrows(carouselArrowsColor){
    // Create the previous arrow element
    const prevArrow = document.createElement('div');
    prevArrow.className = 'carousel-split-arrow prev';
    prevArrow.textContent = '❮';
    prevArrow.style.color= carouselArrowsColor;
    prevArrow.onclick = () => changeSlideSplit(-1);

    // Create the next arrow element
    const nextArrow = document.createElement('div');
    nextArrow.className = 'carousel-split-arrow next';
    nextArrow.textContent = '❯';
    nextArrow.style.color= carouselArrowsColor;
    nextArrow.onclick = () => changeSlideSplit(1);

    return [prevArrow,nextArrow]
  }

  // Function to create slide indicators (dots)
  function createSlideIndicator(slideNumber, carouselIndicatorsActiveColor, carouselIndicatorsInactiveColor) {
    const indicator = document.createElement('span');
    indicator.className = 'indicator-split';
    if (slideNumber === 1) {
      indicator.className += ' active';
    }
    indicator.onclick = function () {
      currentSlideSplit(slideNumber);
    };
    return indicator;
  }
  
  // Function to generate the entire carousel
  export function generateCarouselSplitVersion(
    carouselSplitVersionImg1,
    carouselSplitVersionImg2,
    carouselSplitVersionImg3,
    carouselSplitVersionBackgroundColorTitles1,
    carouselSplitVersionBackgroundColorTitles2,
    carouselSplitVersionBackgroundColorTitles3,
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
        imageSrc: carouselSplitVersionImg1,
        altText: 'Slide 1',
        titleText: carouselMainTitleWording1,
        subtitleText: carouselMainSubtitleWording1,
        buttonText: carouselButtonWording1,
        slideBackgroundColor: carouselSplitVersionBackgroundColorTitles1,
        buttonColor: carouselButtonColor1,
        buttonWordingColor: carouselButtonWordingColor1,
      },
      {
        imageSrc: carouselSplitVersionImg2,
        altText: 'Slide 2',
        titleText: carouselMainTitleWording2,
        subtitleText: carouselMainSubtitleWording2,
        buttonText: carouselButtonWording2,
        slideBackgroundColor: carouselSplitVersionBackgroundColorTitles2,
        buttonColor: carouselButtonColor2,
        buttonWordingColor: carouselButtonWordingColor2,
      },
      {
        imageSrc: carouselSplitVersionImg3,
        altText: 'Slide 3',
        titleText: carouselMainTitleWording3,
        subtitleText: carouselMainSubtitleWording3,
        buttonText: carouselButtonWording3,
        slideBackgroundColor: carouselSplitVersionBackgroundColorTitles3,
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
        slideData.slideBackgroundColor,
        slideData.buttonColor,
        slideData.buttonWordingColor
      );

      
      document.querySelector('.carousel-split-indicators').insertAdjacentElement('beforebegin',slide);
      const indicator = createSlideIndicator(slideNumber);
      document.querySelector('.carousel-split-indicators').appendChild(indicator);
      
    });
    const arrows = createSlideArrows(carouselArrowsColor);
    document.querySelector('.carousel-split-indicators').insertAdjacentElement('beforebegin',arrows[0])
    document.querySelector('.carousel-split-indicators').insertAdjacentElement('beforebegin',arrows[1])
    
    if(displayCarouselCircleShapeIndicators){
        document.querySelectorAll('.indicator-split').forEach((ele)=>{
            ele.style.height="20px";
            ele.style.width="20px";
            ele.style.borderRadius="50%";
            ele.style.marginRight="10px";
        })
    }

    if(displayCarouselFadeTransition){
        document.querySelectorAll('.carousel-split-slide').forEach((ele)=>{ele.classList.add("fade")})
    }
    /*let slideIndexSplit = 1;
    showSlideSplit(slideIndexSplit);*/
  }
  /*
  // Call the function to generate the carousel
  generateCarouselSplitVersion();
  */
  export function getIndicatorsActiveColorSplitVersion(carouselIndicatorsActiveColor){
    return carouselIndicatorsActiveColor
  }

  export function getIndicatorsInactiveColorSplitVersion(carouselIndicatorsInactiveColor){
    return carouselIndicatorsInactiveColor
  }

  export function getAutomaticSlideshowSplitVersion(carouselAutomaticSlideshow){
    if(carouselAutomaticSlideshow){
      // Auto-advance the slides (optional)
      setInterval(() => {
          changeSlideSplit(1);
      }, 4000); // Change slides every 4 seconds *
  }
  }


    // Define the JavaScript functions for changing and navigating slides (changeSlideSplit, currentSlideSplit)
    let slideIndexSplit = 1;
      
    
      setTimeout(() => {
          showSlideSplit(slideIndexSplit);
      }, 1000); 
    
    
    function changeSlideSplit(n) {
        showSlideSplit(slideIndexSplit += n);
    }
    
    function currentSlideSplit(n) {
        showSlideSplit(slideIndexSplit = n);
    }
    
    function showSlideSplit(n) {
      if(document.getElementsByClassName("carousel-split-slide").length>0){
        const slides = document.getElementsByClassName("carousel-split-slide");
        const indicators = document.getElementsByClassName("indicator-split");
        if (n > slides.length) {
            slideIndexSplit = 1;
        }
        if (n < 1) {
            slideIndexSplit = slides.length;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (let i = 0; i < indicators.length; i++) {
            indicators[i].className = indicators[i].className.replace(" active", "");
            indicators[i].style.backgroundColor=getIndicatorsInactiveColorSplitVersion()
        }
        slides[slideIndexSplit - 1].style.display = "block";
        indicators[slideIndexSplit - 1].className += " active";
        indicators[slideIndexSplit - 1].style.backgroundColor=getIndicatorsActiveColorSplitVersion()
      }
    }
