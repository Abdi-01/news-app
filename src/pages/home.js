import React from 'react';
import Axios from 'axios';
import { Image, ScrollView, View } from 'react-native';
import { Avatar, Icon, SocialIcon, Text, Header } from 'react-native-elements';
import Post from '../components/post';
import AsyncStorage from '@react-native-community/async-storage';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    }
    AsyncStorage.getItem('nama', (error, result) => {
      if (result) {
        console.log(result)
      }
    })
  }

  componentDidMount() {
    this.getNews()
  }

  getNews = async () => {
    try {
      let get = await Axios.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=56e93abee1e94703a4c99090376efa3b`)
      this.setState({ news: get.data.articles })
      console.log(get.data)

      await AsyncStorage.setItem('nama', 'Abdi')
    } catch (error) {
      console.log(error)
    }
  }

  renderPost = () => {
    return this.state.news.map((e, index) => {
      return (
        <Post article={e} key={index} />
      )
    })
  }

  render() {
    return (
      <View style={{ backgroundColor: 'gray', flex: 1 }}>
        <ScrollView style={{ padding: 2 }}>
          {this.renderPost()}
        </ScrollView>
      </View>
    );
  }
}

export default Home;