import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const data = [
  { title: 'Creme de barbear', image: require('./src/assets/img_05.jpg') },
  { title: 'Shampoo', image: require('./src/assets/img_02.jpg') },
  { title: 'Item 3', image: require('./src/assets/img_03.jpg') },
  { title: 'Item 4', image: require('./src/assets/img_04.jpg') },
];

export default function VerticalCarousel() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <>
    <View style={styles.container}>
      <Image source={require('./src/assets/img_01.jpg')} style={{width: '100%', height: '50%'}} />
    <View>
    <Text style={styles.titleHeader}>Produtos</Text>
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderHeight={300}
      itemHeight={100}
      vertical={true}
      snapToInterval={200}
      snapToAlignment="start"
      contentContainerCustomStyle={styles.carousel}
    />
    </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#2C2F34'
  },

  carousel: {
    alignItems: 'center',

  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 3,
    marginVertical: 10,
    width: 200,
    heigth: 200,
  },
  image: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  titleHeader: {
    fontSize: 30,
    color:'white',
    fontWeight: 'bold',
    paddingTop: 20,
    paddingLeft: 16,
    paddingBottom: 20
  }
});