//import { KameleoonClient } from '../node_modules/@kameleoon/javascript-sdk/dist/index.js';
const { KameleoonClient, KameleoonException , CustomData, KameleoonUtils } = KameleoonSDK;
import { featureKey, siteCode, visitorCode } from "./constants.js";
import { createIntroductionContent, createBanner, createCardBlock, createPerformancesTitle, createPerformancesBlock} from "./utils.js";
import { generateCarouselExtendedVersion, getIndicatorsActiveColor, getIndicatorsInactiveColor, getAutomaticSlideshow } from "./carouselExtendedVersion.js";
import { generateCarouselSplitVersion, getIndicatorsActiveColorSplitVersion, getIndicatorsInactiveColorSplitVersion, getAutomaticSlideshowSplitVersion } from "./carouselSplitVersion.js";

console.log('Feature Flag Demo')

const client = new KameleoonClient(siteCode);

async function init() {
    try {
      await client.initialize();
      
      //All feature flag variables for blocks elements
      const variableKeysBlocks = [
        "swap_introduction_content",
        "number_cards",
        "card_color",
        "color_card_wording",
        "color_button_card_wording",
        "main_title_card",
        "description_card",
        "button_card_content",
        "container_performances_content",
      ];

      //All feature flag variables for banner elements
      const variableKeysBanner = [
        "banner_height",
        "banner_color",
        "banner_title_text",
        "banner_title_color",
        "banner_subtitle_text",
        "banner_subtitle_color"
      ];

      //All feature flag variables for carousel elements
      const variableKeysCarousel = [
        "display_carousel",
        "display_carousel_split_version",
        "carousel_extended_version_img_1",
        "carousel_extended_version_img_2",
        "carousel_extended_version_img_3",
        "carousel_split_version_img_1",
        "carousel_split_version_img_2",
        "carousel_split_version_img_3",
        "carousel_split_version_background_color_titles_1",
        "carousel_split_version_background_color_titles_2",
        "carousel_split_version_background_color_titles_3",
        "carousel_main_title_wording_1",
        "carousel_main_title_wording_2",
        "carousel_main_title_wording_3",
        "carousel_main_subtitle_wording_1",
        "carousel_main_subtitle_wording_2",
        "carousel_main_subtitle_wording_3",
        "carousel_titles_color_1",
        "carousel_titles_color_2",
        "carousel_titles_color_3",
        "carousel_button_wording_1",
        "carousel_button_wording_2",
        "carousel_button_wording_3",
        "carousel_button_color_1",
        "carousel_button_color_2",
        "carousel_button_color_3",
        "carousel_button_wording_color_1",
        "carousel_button_wording_color_2",
        "carousel_button_wording_color_3",
        "carousel_arrows_color",
        "carousel_indicators_active_color",
        "carousel_indicators_inactive_color",
        "display_carousel_circle_shape_indicators",
        "display_carousel_fade_transition",
        "carousel_automatic_slideshow"
      ];


      const containerVariablesValuesBlocks = {};
      const containerVariablesValuesBanner = {};
      const containerVariablesValuesCarousel = {};

      //get the value associated with each feature flag variable
      function loadVariableKeys(containerVariablesValues, variableKeys, featureKey){
        for (const variableKey of variableKeys) {
          containerVariablesValues[variableKey] = client.getFeatureFlagVariable({
            visitorCode,
            featureKey,
            variableKey,
          }).value;
        }
        console.log(containerVariablesValues)
      }

      loadVariableKeys(containerVariablesValuesCarousel, variableKeysCarousel, featureKey[0])
      loadVariableKeys(containerVariablesValuesBlocks, variableKeysBlocks, featureKey[1])
      loadVariableKeys(containerVariablesValuesBanner, variableKeysBanner, featureKey[2])
      
      //create the content on the page (block, banner, etc...) based on the variable values
      createIntroductionContent(containerVariablesValuesBlocks["swap_introduction_content"])

      createBanner(
        containerVariablesValuesBanner["banner_height"],
        containerVariablesValuesBanner["banner_color"],
        containerVariablesValuesBanner["banner_title_text"],
        containerVariablesValuesBanner["banner_title_color"],
        containerVariablesValuesBanner["banner_subtitle_text"],
        containerVariablesValuesBanner["banner_subtitle_color"]
      )

      for(let i=0; i<containerVariablesValuesBlocks["number_cards"]; i++){
        createCardBlock(
          containerVariablesValuesBlocks["card_color"],
          containerVariablesValuesBlocks["color_card_wording"],
          containerVariablesValuesBlocks["color_button_card_wording"],
          containerVariablesValuesBlocks["main_title_card"],
          containerVariablesValuesBlocks["description_card"],
          containerVariablesValuesBlocks["button_card_content"])
      }

      createPerformancesTitle(containerVariablesValuesBlocks["container_performances_content"])
      createPerformancesBlock(containerVariablesValuesBlocks["container_performances_content"])

      if(containerVariablesValuesCarousel["display_carousel"]){
        if(containerVariablesValuesCarousel["display_carousel_split_version"]){
          getIndicatorsActiveColorSplitVersion( containerVariablesValuesCarousel["carousel_indicators_active_color"]);
          getIndicatorsInactiveColorSplitVersion(containerVariablesValuesCarousel["carousel_indicators_inactive_color"]);
          getAutomaticSlideshowSplitVersion(containerVariablesValuesCarousel["carousel_automatic_slideshow"])
          generateCarouselSplitVersion(
            containerVariablesValuesCarousel["carousel_split_version_img_1"],
            containerVariablesValuesCarousel["carousel_split_version_img_2"],
            containerVariablesValuesCarousel["carousel_split_version_img_3"],
            containerVariablesValuesCarousel["carousel_split_version_background_color_titles_1"],
            containerVariablesValuesCarousel["carousel_split_version_background_color_titles_2"],
            containerVariablesValuesCarousel["carousel_split_version_background_color_titles_3"],
            containerVariablesValuesCarousel["carousel_main_title_wording_1"],
            containerVariablesValuesCarousel["carousel_main_title_wording_2"],
            containerVariablesValuesCarousel["carousel_main_title_wording_3"],
            containerVariablesValuesCarousel["carousel_main_subtitle_wording_1"],
            containerVariablesValuesCarousel["carousel_main_subtitle_wording_2"],
            containerVariablesValuesCarousel["carousel_main_subtitle_wording_3"],
            containerVariablesValuesCarousel["carousel_button_wording_1"],
            containerVariablesValuesCarousel["carousel_button_wording_2"],
            containerVariablesValuesCarousel["carousel_button_wording_3"],
            containerVariablesValuesCarousel["carousel_button_color_1"],
            containerVariablesValuesCarousel["carousel_button_color_2"],
            containerVariablesValuesCarousel["carousel_button_color_3"],
            containerVariablesValuesCarousel["carousel_button_wording_color_1"],
            containerVariablesValuesCarousel["carousel_button_wording_color_2"],
            containerVariablesValuesCarousel["carousel_button_wording_color_3"],
            containerVariablesValuesCarousel["carousel_arrows_color"],
            containerVariablesValuesCarousel["display_carousel_circle_shape_indicators"],
            containerVariablesValuesCarousel["display_carousel_fade_transition"]
          );
        }
        else{
          getIndicatorsActiveColor( containerVariablesValuesCarousel["carousel_indicators_active_color"]);
          getIndicatorsInactiveColor(containerVariablesValuesCarousel["carousel_indicators_inactive_color"]);
          getAutomaticSlideshow(containerVariablesValuesCarousel["carousel_automatic_slideshow"])
          generateCarouselExtendedVersion(
            containerVariablesValuesCarousel["carousel_extended_version_img_1"],
            containerVariablesValuesCarousel["carousel_extended_version_img_2"],
            containerVariablesValuesCarousel["carousel_extended_version_img_3"],
            containerVariablesValuesCarousel["carousel_main_title_wording_1"],
            containerVariablesValuesCarousel["carousel_main_title_wording_2"],
            containerVariablesValuesCarousel["carousel_main_title_wording_3"],
            containerVariablesValuesCarousel["carousel_main_subtitle_wording_1"],
            containerVariablesValuesCarousel["carousel_main_subtitle_wording_2"],
            containerVariablesValuesCarousel["carousel_main_subtitle_wording_3"],
            containerVariablesValuesCarousel["carousel_button_wording_1"],
            containerVariablesValuesCarousel["carousel_button_wording_2"],
            containerVariablesValuesCarousel["carousel_button_wording_3"],
            containerVariablesValuesCarousel["carousel_button_color_1"],
            containerVariablesValuesCarousel["carousel_button_color_2"],
            containerVariablesValuesCarousel["carousel_button_color_3"],
            containerVariablesValuesCarousel["carousel_button_wording_color_1"],
            containerVariablesValuesCarousel["carousel_button_wording_color_2"],
            containerVariablesValuesCarousel["carousel_button_wording_color_3"],
            containerVariablesValuesCarousel["carousel_arrows_color"],
            containerVariablesValuesCarousel["display_carousel_circle_shape_indicators"],
            containerVariablesValuesCarousel["display_carousel_fade_transition"]
          );
        }
      }
      

    } catch (err) {
      switch (err.type) {
        case KameleoonException.StorageWrite:
        // -- Handle error case
        case KameleoonException.ClientConfiguration:
        // -- Handle error case
        default:
          break;
      }
    }
  }
  
  init();









        /*
      const swapIntroductionContent = client.getFeatureFlagVariable({
        visitorCode,
        featureKey,
        variableKey: "swap_introduction_content",
      }).value
      
      const numberCards = client.getFeatureFlagVariable({
        visitorCode,
        featureKey,
        variableKey: "number_cards",
      }).value

      const cardColor = client.getFeatureFlagVariable({
        visitorCode,
        featureKey,
        variableKey: "card_color",
      }).value

      const colorCardWording = client.getFeatureFlagVariable({
        visitorCode,
        featureKey,
        variableKey: "color_card_wording",
      }).value

      const colorButtonCardWording = client.getFeatureFlagVariable({
        visitorCode,
        featureKey,
        variableKey: "color_button_card_wording",
      }).value

      const mainTitleCard = client.getFeatureFlagVariable({
        visitorCode,
        featureKey,
        variableKey: "main_title_card",
      }).value

      const descriptionCard = client.getFeatureFlagVariable({
        visitorCode,
        featureKey,
        variableKey: "description_card",
      }).value

      const buttonCardContent = client.getFeatureFlagVariable({
        visitorCode,
        featureKey,
        variableKey: "button_card_content",
      }).value

      const jsonContainerPerformancesContent = client.getFeatureFlagVariable({
        visitorCode,
        featureKey,
        variableKey: "container_performances_content",
      }).value
      */