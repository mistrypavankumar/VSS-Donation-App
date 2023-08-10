import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { images } from "../core/images";

const SplashScreen = () => {
  return (
    <View>
      <Image src={images.logo} alt="vss-logo" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SplashScreen;
