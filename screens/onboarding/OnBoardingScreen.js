import React, { useRef, useState } from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import Slider from "./components/Slider";
import { sliderData } from "../../core/constants";
import SliderBottomSheet from "./components/SliderBottomSheet";
import customDimension from "../../core/customDimension";

const OnBoardingScreen = () => {
  const flatListRef = useRef(null);

  const [currentSlider, setCurrentSlider] = useState(0);

  const handleScroll = (event) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    const index = Math.floor(contentOffset.x / layoutMeasurement.width);
    if (currentSlider <= sliderData.length - 1) {
      setCurrentSlider(index);
      console.log(currentSlider);
    }
  };

  const scrollToNextItem = () => {
    if (flatListRef.current) {
      const nextIndex = currentSlider + 1;
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentSlider(nextIndex);
      console.log(nextIndex, "=>>");
    }
  };

  const scrollToPrevItem = () => {
    if (flatListRef.current) {
      const prevIndex = currentSlider - 1;
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentSlider(prevIndex);
      console.log(prevIndex, "<<=");
    }
  };

  return (
    <SafeAreaView>
      <FlatList
        ref={flatListRef}
        data={sliderData}
        showsHorizontalScrollIndicator={false}
        horizontal
        onScroll={handleScroll}
        keyExtractor={(item) => item.id}
        snapToInterval={customDimension.screenWidth}
        snapToAlignment="center"
        renderItem={({ item, index }) => {
          let imageSource = item.image;

          if (index === currentSlider) {
            imageSource = item.image;
          }

          return (
            <Slider title={item.title} quote={item.quote} image={imageSource} />
          );
        }}
      />
      <SliderBottomSheet
        title={sliderData[currentSlider].title}
        quote={sliderData[currentSlider].quote}
        currentSlider={currentSlider}
        onPressPrev={() => {
          if (currentSlider >= 0 && currentSlider < sliderData.length - 1) {
            scrollToPrevItem();
          }
        }}
        onPressNext={() => {
          if (currentSlider >= 0 && currentSlider < sliderData.length - 1) {
            scrollToNextItem();
          }
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default OnBoardingScreen;
