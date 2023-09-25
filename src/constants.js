//import { KameleoonUtils } from '../node_modules/@kameleoon/javascript-sdk/dist/index.js';
const { KameleoonUtils } = KameleoonSDK;
// -- Constants values
export const siteCode = "44r9jgmatl";
export const featureKey = "demo_web_feature_flag";
export const visitorCode = KameleoonUtils.getVisitorCode("www.example.com");
