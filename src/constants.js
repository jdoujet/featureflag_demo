//import { KameleoonUtils } from '../node_modules/@kameleoon/javascript-sdk/dist/index.js';
const { KameleoonUtils } = KameleoonSDK;
// -- Constants values
export const siteCode = "44r9jgmatl";
export const featureKeys = ["demo_web_feature_flag_carousel", "demo_web_feature_flag_blocks", "demo_web_feature_flag_banner"];
export const visitorCode = KameleoonUtils.getVisitorCode("www.example.com");
