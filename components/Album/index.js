import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import randomColor from 'randomcolor';
import {connect} from 'react-redux';

import {fetchPhotos, addPhoto, removePhoto} from '../../redux/photos/actions';

class Album extends Component {
  // Test persistence of Redux store by delaying call to fetchPhotos, to check for persisted
  // data before being fetched again from the API (caching)
  componentDidMount() {
    setTimeout(() => {
      this.props.fetchPhotos();
    }, 1000);
  }

  addPhoto = () => {
    const photo = {
      albumId: 6,
      title: 'My Photo',
      url: `https://via.placeholder.com/600/${randomColor().replace('#', '')}`,
      thumbnailUrl: `https://via.placeholder.com/150/${randomColor().replace(
        '#',
        '',
      )}`,
    };
    this.props.addPhoto(photo);
  };

  removePhoto = id => {
    this.props.removePhoto(id);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.toolbar}>Album</Text>

        <ScrollView>
          <View style={styles.imageContainer}>
            <TouchableOpacity style={styles.button} onPress={this.addPhoto}>
              <Text style={styles.buttonText}>Add Photo</Text>
            </TouchableOpacity>

            {this.props.photos
              ? this.props.photos.map(photo => {
                  return (
                    <TouchableOpacity
                      onPress={() => this.removePhoto(photo.id)}
                      key={Math.random()}>
                      <Image style={styles.image} source={{uri: photo.url}} />
                    </TouchableOpacity>
                  );
                })
              : null}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#3498db',
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 300,
    width: 350,
    margin: 20,
  },
  button: {
    margin: 10,
    padding: 20,
    backgroundColor: '#3498db',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});

const mapStateToProps = state => {
  return {
    photos: state.photos.loadedPhotos,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPhotos: () => dispatch(fetchPhotos()),
    addPhoto: photo => dispatch(addPhoto(photo)),
    removePhoto: id => dispatch(removePhoto(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Album);
