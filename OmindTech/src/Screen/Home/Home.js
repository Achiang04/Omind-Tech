import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header name={'Home'} />
      </View>
      <ImageCarousel />
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View style={styles.container1}>
              <Text>{item.key}</Text>
              <Text>{item.type}</Text>
              <Text>{item.value}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}
