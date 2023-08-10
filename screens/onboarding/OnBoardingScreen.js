import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBarStyle,
  StatusBar,
} from "react-native";
import customDimension from "../../core/customDimension";
import Colors from "../../core/colors";

const OnBoardingScreen = () => {
  return (
    <SafeAreaView>
      <View
        style={[
          styles.mainScreen,
          {
            paddingTop: StatusBar.currentHeight,
          },
        ]}
      >
        <View style={styles.bottomSheet}>
          <View style={styles.bar} />
          <View>
            <Text style={styles.title}>
              Donate easily, quickly, right on target all over the world
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    width: customDimension.screenWidth,
    height: customDimension.screenHeight,
    backgroundColor: "#0001",
    justifyContent: "flex-end",
  },

  bottomSheet: {
    width: customDimension.screenWidth,
    height: "50%",
    backgroundColor: "#fff",
    borderTopLeftRadius: customDimension.borderRadius * 3,
    borderTopRightRadius: customDimension.borderRadius * 3,
    paddingHorizontal: customDimension.padding15 * 2,
    paddingTop: customDimension.padding15 * 1.5,
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
  },
});

export default OnBoardingScreen;
