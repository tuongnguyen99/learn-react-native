import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import Card from "./Card";
import CardSection from "./CardSection";

const AlbumDetail = ({ data }) => {
  return (
    <View>
      <Card>
        <CardSection>
          <View style={styles.thumbnailContainerStyle}>
            <Image
              style={styles.thumbnailStyle}
              source={{ uri: data.thumbnail_image }}
            />
          </View>
          <View style={styles.headerContentStyle}>
            <Text style={styles.headerTextStyle}>{data.title}</Text>
            <Text>{data.artist}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image style={styles.imageStyle} source={{ uri: data.image }} />
        </CardSection>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContentStyle: {
    justifyContent: "space-around"
  },
  thumbnailStyle: {
    width: 50,
    height: 50
  },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    margin: 6
  },
  headerTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    flex: 1,
    height: 300,
    width: null
  }
});

export default AlbumDetail;
