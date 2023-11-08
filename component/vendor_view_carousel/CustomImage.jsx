import { StyleSheet, Image, View, Platform } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import Animated, { useAnimatedStyle, interpolate } from 'react-native-reanimated';
const CustomImage = ({ item, x, index, size, spacer }) => {
  const [aspectRatio, setAspectRatio] = useState(1);

  if (!item.image && item.imageFileName) {
    item.image = item.imageFileName;
  }
  // Get Image Width and Height to Calculate AspectRatio
  useLayoutEffect(() => {
    if (item.image) {
      // if (Platform.OS !== "web") {
      //   const {width, height} = Image.resolveAssetSource(item.image);
      //   setAspectRatio(width / height);
      // } else {
        // let { width, height } = { 16: 9 };
        const width = 16
        const height = 10
        setAspectRatio(width / height);
      // }
    }
  }, [item.image]);

  const style = useAnimatedStyle(() => {
    const scale = interpolate(
      x.value,
      [(index - 2) * size, (index - 1) * size, index * size],
      [0.8, 1, 0.8],
    );
    return {
      transform: [{ scale }],
    };
  });

  if (!item.image) {
    return <View style={{ width: spacer }} key={index} />;
  }
  // console.log(item);
  return (
    <View style={{ width: size }} key={index}>
      <Animated.View style={[styles.imageContainer
        // , style
        ]}>
        <Image
          source={{uri: item.image}}
          style={[styles.image, { aspectRatio: aspectRatio }]}
        />
      </Animated.View>
    </View>
  );
};

export default CustomImage;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: undefined,
  },
});
