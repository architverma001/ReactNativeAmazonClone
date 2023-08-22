import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React, { useState,memo } from "react";
import { vw } from "react-native-css-vh-vw";
import { useNavigation } from '@react-navigation/native';

const ProductItem = ({ item }) => {
  const [addedToCart, setAddedToCart] = useState(false);
   const [cart, setCart] = useState();
   const [products, setProducts] = useState([]);
   const navigation = useNavigation();
  return (
    <Pressable style={{ marginHorizontal: 20, marginVertical: 25 }}
    onPress={() => {
      const items = {
        id: item.id,
        title: item.description,
        carouselImages: item.image,
        
        price: item.price,
        rating: item.rate,
        oldPrice: item.price*1.28, 
        item:items 
      }
      navigation.navigate("Infos", {
        id: item.id,
        title: item.description,
        carouselImages: item.image,
        image: item.image,
        price: item.price,
        rating: item.rate,
        oldPrice: item.price*1.28, 
        item:items 
      });
      console.log({items})}
     
  }
    >
      <Image
        style={{ width: 130, height: 130, resizeMode: "contain" }}
        source={{ uri: item?.image }}
      />

      <Text numberOfLines={3} style={{ width: 130, marginTop: 10 }}>
        {item?.title}
      </Text>

      <View
        style={{
          marginTop: 5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>₹{item?.price}</Text>
        <Text style={{ color: "#FFC72C", fontWeight: "bold" }}>
          {item?.rating?.rate} ratings
        </Text>
      </View>

      <Pressable
        onPress={() => {console.log({item})}}
        style={{
          backgroundColor: "#FFC72C",
          padding: 10,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 10,
          marginTop: 10,
        }}
      >
        {addedToCart ? (
          <View>
            <Text>Added to Cart</Text>
          </View>
        ) : (
          <Text>Add to Cart</Text>
        )}
      </Pressable>
    </Pressable>
  );
};

export default memo(ProductItem);

const styles = StyleSheet.create({});
