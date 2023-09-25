//import { KameleoonClient } from '../node_modules/@kameleoon/javascript-sdk/dist/index.js';
const { KameleoonClient, CustomData, KameleoonUtils } = KameleoonSDK;
import { featureKey, siteCode, visitorCode } from "./constants.js";

console.log('test')

const client = new KameleoonClient(siteCode);