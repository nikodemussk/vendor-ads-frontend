import { View, useWindowDimensions, Text, Platform } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedRef,
} from 'react-native-reanimated';
import Pagination from './Pagination';
import CustomImage from './CustomImage';
import { styles } from '../styles/CommonStyles';
import { TouchableOpacity } from 'react-native';
const CustomImageCarousal = ({ data, autoPlay, pagination, navigation }) => {
  const scrollViewRef = useAnimatedRef(null);
  const interval = useRef();
  const [isAutoPlay, setIsAutoPlay] = useState(autoPlay);
  const [newData, setNewData] = useState([
    // {key: 'spacer-left'},
    ...data,
    // {key: 'spacer-right'},
  ]);
  const { width } = useWindowDimensions();
  const SIZE = Platform.OS === 'android' ? width * 0.3 : width * 0.25;
  const SPACER = (width - SIZE) / 2;
  const x = useSharedValue(0);
  const offSet = useSharedValue(0);

  // Update newData if data change
  useEffect(() => {
    setNewData([
      // {key: 'spacer-left'}, 
      ...data,
      // {key: 'spacer-right'}
    ]);
  }, [data]);

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x;
    },
    onMomentumEnd: e => {
      offSet.value = e.contentOffset.x;
    },
  });

  useEffect(() => {
    if (isAutoPlay === true) {
      let _offSet = offSet.value;
      interval.current = setInterval(() => {
        if (_offSet >= Math.floor(SIZE * (data.length - 1) - 10)) {
          _offSet = 0;
        } else {
          _offSet = Math.floor(_offSet + SIZE);
        }
        scrollViewRef.current.scrollTo({ x: _offSet, y: 0 });
      }, 2000);
    } else {
      clearInterval(interval.current);
    }
    return () => {
      clearInterval(interval.current);
    };
  }, [SIZE, SPACER, isAutoPlay, data.length, offSet.value, scrollViewRef]);

  return (
    <View>
      <Animated.ScrollView
        ref={scrollViewRef}
        onScroll={onScroll}
        onScrollBeginDrag={e => {
          setIsAutoPlay(false);
        }}
        onMomentumScrollEnd={() => {
          setIsAutoPlay(autoPlay);
        }}
        scrollEventThrottle={16}
        decelerationRate="fast"
        snapToInterval={SIZE}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={true}>
        {newData.map((item, index) => {
          // console.log(item)
          return (
            <View style={styles.homeCarosell}>
              <TouchableOpacity onPress={() => navigation.navigate("VendorDetailsView", item)}>
                {item.images[0] !== null && <CustomImage
                  key={index}
                  index={index}
                  item={item.images[0]}
                  x={x}
                  size={SIZE}
                  spacer={SPACER}
                /> }
                <Text style={styles.carouselText}>{item.name}</Text>
                <Text style={styles.carouselText}>{width}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </Animated.ScrollView>
      {/* {pagination && <Pagination data={data} x={x} size={SIZE} />} */}
    </View>
  );
};

export default CustomImageCarousal;
