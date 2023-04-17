import { Animated, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useRef, useState } from 'react';
import SlideItem from './SlideItem';
import Pagination from './Pagination';

const Slider = () => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    // console.log('viewableItems', viewableItems);
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 20,
  }).current;


  const aaaaaaaaaaaa = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1685392024691-0a4e366701d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      title: 'Apple',
      description: 'The future of health is on your wrist',
      price: '$399',
    },
    // {
    //   id: 2,
    //   img: require('https://images.unsplash.com/photo-1685392024691-0a4e366701d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'),
    //   title: 'AirPods Pro',
    //   description: 'Active noise cancellation for immersive sound',
    //   price: '$249',
    // },
    // {
    //   id: 3,
    //   img: require('https://images.unsplash.com/photo-1685392024691-0a4e366701d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'),
    //   title: 'AirPods Max',
    //   description: 'Effortless AirPods experience',
    //   price: '$549',
    // },
    // {
    //   id: 4,
    //   img: require('https://images.unsplash.com/photo-1685392024691-0a4e366701d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'),
    //   title: 'Charger',
    //   description: "It's not magic, it's just science",
    //   price: '$49',
    // },
    // {
    //   id: 5,
    //   img: require('https://images.unsplash.com/photo-1685392024691-0a4e366701d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'),
    //   title: 'Smart Lock',
    //   description: 'Unlock your door with your phone',
    //   price: '$199',
    // },
  ];


  return (
    <View style={{
      maxHeight: "150px",
      // maxWidth: "100px"
    }}>
      <FlatList
        styles={{width: "100px"}}
        data={aaaaaaaaaaaa}
        renderItem={({ item, index }) => <SlideItem item={item} index={index}/>}
        horizontal
        scrollEnabled={true}
        showsVerticalScrollIndicator={true}
        pagingEnabled
        snapToAlignment="left"
        showsHorizontalScrollIndicator={true}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      {/* <Pagination data={aaaaaaaaaaaa} scrollX={scrollX} index={index} /> */}
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({});
