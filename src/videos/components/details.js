import React from 'react'
import { View, Text, StyleSheet, Image, WebView, ScrollView} from 'react-native';
import { makeHTML   } from '../../utils/trailer-youtube';
import Loader from '../../loader/loader';

/* <iframe width="560" height="315" src="https://www.youtube.com/embed/QwievZ1Tx-8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */

const Details = (props) => {
  return (
    props.loading ?
    <Loader size="large" style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}/>
    :
    <ScrollView>
      <View style={styles.top}>
        <Text>{props.title}</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.details}>
          <Image
            style={styles.cover}
            source={{ uri: props.medium_cover_image }}
          />
          <Text style={styles.description}>{props.description_full}</Text>
        </View>
      </View>
      <View style={styles.trailer}>
        <WebView
          source={{html: makeHTML(props.yt_trailer_code ) }}
        />
      </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {},
  trailer: {
    height: 200,
    marginBottom: 20
  },
  details: {
    flexDirection: "row",
    marginBottom: 20
  },
  cover: {
    width: 125,
    height: 190
  },
  title: {
    color: "#44546b",
    fontSize: 18,
    fontWeight: "bold"
  },
  top: {
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
    padding: 20,
    backgroundColor: "white"
  },
  bottom: {
    padding: 20,
    flex: 1
  },
  description: {
    fontSize: 15,
    lineHeight: 22.5,
    color: "#4c4c4c",
    marginLeft: 10,
    flex: 1
  },
})



export default Details;