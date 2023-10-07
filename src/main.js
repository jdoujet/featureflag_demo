//import { KameleoonClient } from '../node_modules/@kameleoon/javascript-sdk/dist/index.js';
const { KameleoonClient, KameleoonException , CustomData, KameleoonUtils } = KameleoonSDK;
import { featureKey, siteCode, visitorCode } from "./constants.js";
import { createIntroductionContent, createCardBlock, createPerformancesTitle, createPerformancesBlock} from "./utils.js";
import { generateCarouselExtendedVersion, getIndicatorsActiveColor, getIndicatorsInactiveColor, getAutomaticSlideshow } from "./carouselExtendedVersion.js";
import { generateCarouselSplitVersion, getIndicatorsActiveColorSplitVersion, getIndicatorsInactiveColorSplitVersion, getAutomaticSlideshowSplitVersion } from "./carouselSplitVersion.js";

console.log('test')

const client = new KameleoonClient(siteCode);


async function init() {
    try {
      await client.initialize();
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
      const variableKeys = [
        "swap_introduction_content",
        "number_cards",
        "card_color",
        "color_card_wording",
        "color_button_card_wording",
        "main_title_card",
        "description_card",
        "button_card_content",
        "container_performances_content",
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


      const containerVariablesValues = {};
      
      for (const variableKey of variableKeys) {
        containerVariablesValues[variableKey] = client.getFeatureFlagVariable({
          visitorCode,
          featureKey,
          variableKey,
        }).value;
      }
      console.log(containerVariablesValues)
      createIntroductionContent(containerVariablesValues["swap_introduction_content"])

      for(let i=0; i<containerVariablesValues["number_cards"]; i++){
        createCardBlock(
          containerVariablesValues["card_color"],
          containerVariablesValues["color_card_wording"],
          containerVariablesValues["color_button_card_wording"],
          containerVariablesValues["main_title_card"],
          containerVariablesValues["description_card"],
          containerVariablesValues["button_card_content"])
      }

      createPerformancesTitle(containerVariablesValues["container_performances_content"])
      createPerformancesBlock(containerVariablesValues["container_performances_content"])

      if(containerVariablesValues["display_carousel"]){
        if(containerVariablesValues["display_carousel_split_version"]){
          getIndicatorsActiveColorSplitVersion( containerVariablesValues["carousel_indicators_active_color"]);
          getIndicatorsInactiveColorSplitVersion(containerVariablesValues["carousel_indicators_inactive_color"]);
          getAutomaticSlideshowSplitVersion(containerVariablesValues["carousel_automatic_slideshow"])
          generateCarouselSplitVersion(
            containerVariablesValues["carousel_split_version_img_1"],
            containerVariablesValues["carousel_split_version_img_2"],
            containerVariablesValues["carousel_split_version_img_3"],
            containerVariablesValues["carousel_split_version_background_color_titles_1"],
            containerVariablesValues["carousel_split_version_background_color_titles_2"],
            containerVariablesValues["carousel_split_version_background_color_titles_3"],
            containerVariablesValues["carousel_main_title_wording_1"],
            containerVariablesValues["carousel_main_title_wording_2"],
            containerVariablesValues["carousel_main_title_wording_3"],
            containerVariablesValues["carousel_main_subtitle_wording_1"],
            containerVariablesValues["carousel_main_subtitle_wording_2"],
            containerVariablesValues["carousel_main_subtitle_wording_3"],
            containerVariablesValues["carousel_button_wording_1"],
            containerVariablesValues["carousel_button_wording_2"],
            containerVariablesValues["carousel_button_wording_3"],
            containerVariablesValues["carousel_button_color_1"],
            containerVariablesValues["carousel_button_color_2"],
            containerVariablesValues["carousel_button_color_3"],
            containerVariablesValues["carousel_button_wording_color_1"],
            containerVariablesValues["carousel_button_wording_color_2"],
            containerVariablesValues["carousel_button_wording_color_3"],
            containerVariablesValues["carousel_arrows_color"],
            containerVariablesValues["display_carousel_circle_shape_indicators"],
            containerVariablesValues["display_carousel_fade_transition"]
          );
        }
        else{
          getIndicatorsActiveColor( containerVariablesValues["carousel_indicators_active_color"]);
          getIndicatorsInactiveColor(containerVariablesValues["carousel_indicators_inactive_color"]);
          getAutomaticSlideshow(containerVariablesValues["carousel_automatic_slideshow"])
          generateCarouselExtendedVersion(
            containerVariablesValues["carousel_extended_version_img_1"],
            containerVariablesValues["carousel_extended_version_img_2"],
            containerVariablesValues["carousel_extended_version_img_3"],
            containerVariablesValues["carousel_main_title_wording_1"],
            containerVariablesValues["carousel_main_title_wording_2"],
            containerVariablesValues["carousel_main_title_wording_3"],
            containerVariablesValues["carousel_main_subtitle_wording_1"],
            containerVariablesValues["carousel_main_subtitle_wording_2"],
            containerVariablesValues["carousel_main_subtitle_wording_3"],
            containerVariablesValues["carousel_button_wording_1"],
            containerVariablesValues["carousel_button_wording_2"],
            containerVariablesValues["carousel_button_wording_3"],
            containerVariablesValues["carousel_button_color_1"],
            containerVariablesValues["carousel_button_color_2"],
            containerVariablesValues["carousel_button_color_3"],
            containerVariablesValues["carousel_button_wording_color_1"],
            containerVariablesValues["carousel_button_wording_color_2"],
            containerVariablesValues["carousel_button_wording_color_3"],
            containerVariablesValues["carousel_arrows_color"],
            containerVariablesValues["display_carousel_circle_shape_indicators"],
            containerVariablesValues["display_carousel_fade_transition"]
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