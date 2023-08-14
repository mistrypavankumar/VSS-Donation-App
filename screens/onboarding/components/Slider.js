import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { images } from "../../../core/images";
import SliderBottomSheet from "./SliderBottomSheet";
import { StatusBar } from "expo-status-bar";
import customDimension from "../../../core/customDimension";
import Colors from "../../../core/colors";

const Slider = ({ title, quote, image }) => {
  return (
    <View
      style={[
        styles.mainScreen,
        {
          paddingTop: StatusBar.currentHeight,
        },
      ]}
    >
      <View style={styles.sliderImgContainer}>
        <Image width={100} height={100} source={image} alt="sliderImg-1" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    width: customDimension.screenWidth,
    height: customDimension.screenHeight / 2,
    backgroundColor: Colors.secondaryColor,
    justifyContent: "space-between",
  },

  sliderImgContainer: {
    width: customDimension.screenWidth,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: customDimension.padding15 * 3,
  },
});

export default Slider;
