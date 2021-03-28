import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { desain } from './style'
import Axios from 'axios'

const API_URL = 'http://192.168.50.64:2020'
// Embed style react-native
const gaya = StyleSheet.create({
  tag: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

const model = {
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center'
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: ['Abdi', 'Ade', 'Alex'],
      data: []
    }
  }

  kelas = 'IPA XI'

  componentDidMount() {
    Axios.get(API_URL + '/products/get')
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.data)
    return (
      <>
        <View style={{ backgroundColor: 'red' }}>
          {/* Inline style */}
          <Text style={{
            color: 'blue',
            fontSize: wp('10%'),
            textAlign: 'center',
            fontWeight: 'bold',
            padding: 5, margin: 10
          }}>Halo Bos</Text>
          <Text style={model}>{this.kelas}</Text>
          {
            this.state.nama.map((e, index) => <Text key={index} style={desain.tag}>{e}</Text>)
          }
        </View>
        <Text>Flex Direction : row</Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: wp(20), height: wp(20), backgroundColor: 'orange' }} />
          <View style={{ width: wp(20), height: wp(20), backgroundColor: 'blue' }} />
          <View style={{ width: wp(20), height: wp(20), backgroundColor: 'gray' }} />
          <View style={{ width: wp(20), height: wp(20), backgroundColor: 'steelblue' }} />
        </View>
        <Text>Flex Value</Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, backgroundColor: 'skyblue', width: wp(30), height: wp(30) }} />
          <View style={{ flex: 2, backgroundColor: 'gray', width: wp(30), height: wp(30) }} />
          <View style={{ flex: 3, backgroundColor: 'red', width: wp(30), height: wp(30) }} />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <View style={{ flex: 1, backgroundColor: 'orange' }}>
            <Text>Flex Alignment : flex-start</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
              <View style={{ backgroundColor: 'skyblue', width: wp(10), height: wp(10) }} />
              <View style={{ backgroundColor: 'gray', width: wp(10), height: wp(10) }} />
              <View style={{ backgroundColor: 'red', width: wp(10), height: wp(10) }} />
            </View>
          </View>
          <View style={{ flex: 1, backgroundColor: 'yellow' }}>
            <Text>Flex Alignment : flex-end</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <View style={{ backgroundColor: 'skyblue', width: wp(10), height: wp(10) }} />
              <View style={{ backgroundColor: 'gray', width: wp(10), height: wp(10) }} />
              <View style={{ backgroundColor: 'red', width: wp(10), height: wp(10) }} />
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: 'steelblue' }}>
          <Text style={{ textAlign: 'center' }}>Flex Alignment : center</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View style={{ backgroundColor: 'skyblue', width: wp(10), height: wp(10) }} />
            <View style={{ backgroundColor: 'gray', width: wp(10), height: wp(10) }} />
            <View style={{ backgroundColor: 'red', width: wp(10), height: wp(10) }} />
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <View style={{ flex: 1, backgroundColor: 'orange' }}>
            <Text>Flex Alignment : space-evenly</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
              <View style={{ backgroundColor: 'skyblue', width: wp(10), height: wp(10) }} />
              <View style={{ backgroundColor: 'gray', width: wp(10), height: wp(10) }} />
              <View style={{ backgroundColor: 'red', width: wp(10), height: wp(10) }} />
            </View>
          </View>
          <View style={{ flex: 1, backgroundColor: 'yellow' }}>
            <Text>Flex Alignment : space-around</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <View style={{ backgroundColor: 'skyblue', width: wp(10), height: wp(10) }} />
              <View style={{ backgroundColor: 'gray', width: wp(10), height: wp(10) }} />
              <View style={{ backgroundColor: 'red', width: wp(10), height: wp(10) }} />
            </View>
          </View>
        </View>
      </>
    );
  }
}

export default App;