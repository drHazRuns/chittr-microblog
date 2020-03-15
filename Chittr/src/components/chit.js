import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  ScrollView,
  Image
} from 'react-native'

const WIDTH = Dimensions.get('window').width

class Chit extends Component {
  render () {
    return (
      <View style={styles.chit}>
        <View style={styles.picView}>
          <View style={styles.container}>
            <Text style={styles.name}>User ID: {this.props.user}</Text>
          </View>
          <Image
            source={{
              uri: 'http://192.168.0.4:3333/api/v0.0.5/chits/' +
                `${this.props.chit_id}/photo`
            }}
            style={styles.pic}
          />
        </View>
        <View style={styles.textView}>
          <View style={styles.container}>
            <ScrollView nestedScrollEnabled>
              <Text style={styles.chitText}>{this.props.chit}</Text>
            </ScrollView>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  chit: {
    flexDirection: 'row',
    width: WIDTH,
    height: WIDTH * 0.4,
    borderColor: 'black',
    borderBottomWidth: 2
  },
  container: {
    margin: 10
  },
  picView: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: 'black'
  },
  textView: {
    flex: 2,
    padding: 5
  },
  name: {
    fontSize: 20,
    textAlign: 'center'
  },
  pic: {
    width: WIDTH * 0.25,
    height: WIDTH * 0.25,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1
  },
  chitText: {
    fontSize: 17,
    fontWeight: 'bold'
  }
})

export default Chit
