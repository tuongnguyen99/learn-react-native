import React from "react";
import { View, Text, Image, StyleSheet, Linking } from "react-native";

import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

const AlbumDetail = ({ data }) => {
  const {
    thumbnailContainerStyle,
    thumbnailStyle,
    headerContentStyle,
    headerTextStyle,
    imageStyle
  } = styles;
  const { _id, title, artist, image, thumbnail_image, url } = data;
  return (
    <View>
      <Card>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
          </View>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image style={imageStyle} source={{ uri: image }} />
        </CardSection>
        <CardSection>
          <Button
            title="By now"
            onPress={() => {
              Linking.openURL(url);
            }}
          />
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
