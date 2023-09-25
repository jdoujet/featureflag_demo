//import { KameleoonClient } from '../node_modules/@kameleoon/javascript-sdk/dist/index.js';
const { KameleoonClient, KameleoonException , CustomData, KameleoonUtils } = KameleoonSDK;
import { featureKey, siteCode, visitorCode } from "./constants.js";

console.log('test')

const client = new KameleoonClient(siteCode);


async function init() {
    try {
      await client.initialize();
      const title = client.getFeatureFlagVariable({
        visitorCode,
        featureKey,
        variableKey: "title_page",
      }).value
      //const titleDiv = document.createElement("div");
      document.querySelector('#app').insertAdjacentHTML("beforeend","<div>"+title+"</div>")
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