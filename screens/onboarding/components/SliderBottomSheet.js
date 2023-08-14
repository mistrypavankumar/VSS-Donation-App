import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import customDimension from "../../../core/customDimension";
import Colors from "../../../core/colors";

const SliderBottomSheet = ({
  title,
  quote,
  onPressNext,
  onPressPrev,
  previousSlider,
  currentSlider,
}) => {
  const [toggle, setToggle] = useState(0);

  const [buttonWidth] = useState(
    new Animated.Value(customDimension.screenWidth * 0.87)
  );

  const animateButton = () => {
    const targetPercentage = 0.4;
    const parentWidth = customDimension.screenWidth;
    const initialWidth = parentWidth;
    const targetWidth = initialWidth * targetPercentage;

    Animated.timing(buttonWidth, {
      toValue: targetWidth,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  const animateButtonToNormal = () => {
    Animated.timing(buttonWidth, {
      toValue: customDimension.screenWidth * 0.87,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.bottomSheet}>
      <View style={styles.bar} />
      <View
        style={{
          justifyContent: "space-around",
          width: customDimension.screenWidth,
          height: "80%",
          paddingHorizontal: customDimension.padding15 * 2,
        }}
      >
        <View>
          <Text style={styles.title}>{title} </Text>
          <Text style={styles.desc}>{quote}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={[
              styles.dot,
              {
                opacity: 1,
              },
            ]}
          />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <View style={{ flexDirection: "row" }}>
          <Animated.View
            style={[
              styles.button,
              {
                width: "45%",
                left: 0,
                opacity: toggle ? 1 : 0,
              },
            ]}
          >
            <TouchableOpacity
              onPress={() => {
                onPressNext();

                if (currentSlider == 0) {
                  animateButtonToNormal();
                  setToggle(0);
                }
              }}
              activeOpacity={customDimension.activeOpacity}
            >
              <Text style={styles.buttonTextStyle}>Prev</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            style={[
              styles.button,
              {
                width: buttonWidth,
                right: 0,
              },
            ]}
          >
            <TouchableOpacity
              onPress={() => {
                onPressNext();
                animateButton();
                setToggle(1);
              }}
              activeOpacity={customDimension.activeOpacity}
            >
              <Text style={styles.buttonTextStyle}>Next</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomSheet: {
    elevation: 20,
    width: customDimension.screenWidth,
    height: customDimension.screenHeight / 2,
    backgroundColor: "#fff",
    borderTopLeftRadius: customDimension.borderRadius * 3,
    borderTopRightRadius: customDimension.borderRadius * 3,
    paddingTop: customDimension.padding15 * 1.5,
  },

  dot: {
    width: 10,
    height: 10,
    backgroundColor: Colors.primary,
    borderRadius: 100,
    opacity: 0.5,
    marginBottom: customDimension.margin15 * 2,
  },

  bar: {
    height: 6,
    width: 100,
    backgroundColor: Colors.highLightText,
    opacity: 0.102,
    alignSelf: "center",
    borderRadius: 100,
  },

  title: {
    fontSize: customDimension.titleFontSize,
    fontWeight: "bold",
    marginTop: customDimension.margin15 * 2,
    textAlign: "center",
  },

  desc: {
    fontSize: customDimension.descriptionFontSize,
    marginTop: customDimension.margin15 * 2,
    textAlign: "center",
    lineHeight: 24,
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    borderRadius: 15,
    position: "absolute",
    bottom: 0,
  },

  buttonTextStyle: {
    color: Colors.secondaryColor,
    fontSize: 17,
  },
});

export default SliderBottomSheet;
