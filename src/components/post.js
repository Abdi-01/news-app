import React from 'react';
import { Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Link } from 'react-router-native';

export default ({ article }) => {
    return (
        <Card>
            <CardItem>
                <Left>
                    <Thumbnail source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png' }} />
                    <Body>
                        <Text>{article.source.name}</Text>
                        <Text>{article.author}</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem cardBody>
                <Image source={{ uri: article.urlToImage }} style={{ height: hp('40%'), flex: 1 }} />
            </CardItem>
            <CardItem >
                <Body>
                    <Text style={{ fontWeight: 'bold' }}>{article.source.name}</Text>
                    <Text style={{ textAlign: 'justify' }}>{article.description}</Text>
                </Body>
            </CardItem>
            <CardItem>
                <Left>
                    <Button transparent>
                        <Icon active name="thumbs-up" />
                        <Text>12 Likes</Text>
                    </Button>
                </Left>
                <Body>
                    <Button transparent>
                        <Icon active name="chatbubbles" />
                        <Text>4 Comments</Text>
                    </Button>
                </Body>
                <Right>
                    <Link to={{
                        pathname: '/detail',
                        state: { article }
                    }}>
                        <Text>Detail</Text>
                    </Link>
                </Right>
            </CardItem>
        </Card>
    )
}