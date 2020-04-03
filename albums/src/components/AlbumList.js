import React, { Component } from "react";
import { ScrollView } from "react-native";

import axios from "axios";
import AlbumDetail from "./AlbumDetail";

class AlbumList extends Component {
  state = {
    albums: []
  };

  componentDidMount() {
    axios
      .get("https://my.api.mockaroo.com/albums.json?key=0015b240")
      .then(response => {
        this.setState({ albums: response.data });
        alert("Data loaded!");
      })
      .catch(error => {
        alert(error.message);
      });
  }

  renderAlbums = () => {
    const { albums } = this.state;
    return albums.map(album => {
      return (
        <AlbumDetail key={album._id} data={album}>
          {album.title}
        </AlbumDetail>
      );
    });
  };

  render() {
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default AlbumList;
