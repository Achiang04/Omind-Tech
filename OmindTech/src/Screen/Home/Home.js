import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import axios from 'axios';
import Header from '../../Reusable/Header/Header';
import styles from './HomeStyle';
import ImageCarousel from './ImageCarousel';

export default function Home() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://www.getpostman.com/collections/76c330db5471fe4afda4',
      );
      setData(response.data.item[0].request.body.formdata);
      console.log(response.data.item[0].request.body.formdata);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  const updateOnPress = (index) => {
    const Warna = data.map((item) => {
      item.selected = false;
      return item;
    });
    Warna[index].selected = true;
    setData(Warna);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header name={'Home'} />
      </View>
      <ImageCarousel />
      <Text style={styles.text}>Grup</Text>
      <FlatList
        contentContainerStyle={{marginLeft: 20, marginRight: 20}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                updateOnPress(index);
              }}>
              <View
                style={
                  item.selected ? styles.container1Press : styles.container1
                }>
                <Text>{item.key}</Text>
                <Text>{item.type}</Text>
                <Text>{item.value}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
