import { Card, CardItem, Body } from 'native-base';
import React, { Component } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { Text } from 'react-native-elements';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        console.log('Cek props======================', this.props.location.state)
        let { article } = this.props.location.state
        return (
            <ScrollView>
                <Card style={{ flex: 1 }}>
                    <CardItem>
                        <Body>
                            <Text h4>{article.title}</Text>
                            <Text>Publish : {article.publishedAt} Author : {article.author}</Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Image source={{ uri: article.urlToImage }} style={{ height: hp('30%'), flex: 1 }} />
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>{article.description}</Text>
                            <Text>{article.content}</Text>
                        </Body>
                    </CardItem>
                </Card>
                {/* <Text>Ini Detail</Text> */}
            </ScrollView>
        );
    }
}

export default Detail;