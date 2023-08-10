import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

const borderRadius = 12;

const titleFontSize = 25;
const headingFontSize = 20;
const descriptionFontSize = 18;

const horizontalPadding = 20;
const horizontalMargin = 20;

const margin15 = horizontalMargin / 1.5;
const padding15 = horizontalPadding / 1.5;

const activeOpacity = 0.8;
const elevation = 4;

export default {
  screenWidth: width,
  screenHeight: height,
  borderRadius,
  titleFontSize,
  headingFontSize,
  horizontalPadding,
  horizontalMargin,
  descriptionFontSize,

  margin15,
  padding15,
  activeOpacity,
  elevation,
};
