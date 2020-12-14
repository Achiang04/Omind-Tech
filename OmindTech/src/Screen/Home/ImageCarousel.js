import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage, Pagination} from 'react-native-snap-carousel';
import {View, Dimensions, StyleSheet} from 'react-native';
import {wp, hp} from '../../Reusable/Responsive/dimen';
import styles from './ImageCarouselStyle';

const ENTRIES1 = [
  {
    id: 1,

    illustration: require('../../assets/image/Post-1.jpeg'),
  },
  {
    id: 2,

    illustration: require('../../assets/image/Post-3.png'),
  },
  {
    id: 3,
    illustration: require('../../assets/image/Post-2.jpg'),
  },
];
const {width: screenWidth} = Dimensions.get('window');

const ImageCarousel = (props) => {
  const [entries, setEntries] = useState([]);
  const [slider1ActiveSlide, setSlider1ActiveSlide] = useState(0);

  const carouselRef = useRef(null);

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({item}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={item.illustration}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0}
          {...parallaxProps}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        activedo
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={wp(260)}
        autoplay={true}
        loopClonesPerSide={5}
        autoplayInterval={5000}
        onSnapToItem={(index) => setSlider1ActiveSlide(index)}
        loop={true}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      />

      <Pagination
        dotsLength={entries.length}
        activeDotIndex={slider1ActiveSlide}
        dotColor={'#FDCB5A'}
        dotStyle={styles.paginationDot}
        inactiveDotColor={'lightgrey'}
        inactiveDotOpacity={0.75}
        inactiveDotScale={1}
        carouselRef={carouselRef}
      />
    </View>
  );
};

export default ImageCarousel;
