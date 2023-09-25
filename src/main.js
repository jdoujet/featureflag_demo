//import { KameleoonClient } from '../node_modules/@kameleoon/javascript-sdk/dist/index.js';
const { KameleoonClient, KameleoonException , CustomData, KameleoonUtils } = KameleoonSDK;
import { featureKey, siteCode, visitorCode } from "./constants.js";

console.log('test')

const client = new KameleoonClient(siteCode);


async function init() {
    try {
      await client.initialize();
      
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

      for(let i=0; i<numberCards; i++){
        console.log('getFFVAlue')
        createCardBlock(cardColor, colorCardWording, colorButtonCardWording, mainTitleCard, descriptionCard, buttonCardContent)
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