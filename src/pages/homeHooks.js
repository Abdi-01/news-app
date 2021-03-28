import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, TextInput, View, Alert, Button, ScrollView } from 'react-native';
import Post from '../components/post';
// Cara penulisan Functional Component
// Versi 1 
const HomePage = (props) => {
    // param pertama sebagai nama state, param kedua sebagai setState
    // Single state
    const [tulisan, setTulisan] = useState('Ini State')

    // Multiple state
    const [data, setData] = useState({
        nama: 'Abdi',
        usia: 24,
        status: 'Single',
        news: []
    })

    const [news, setNews] = useState([])
    // Lifecycle pada hooks
    useEffect(() => {
        getNews()
    })

    const getNews = async () => {
        try {
            let get = await Axios.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=56e93abee1e94703a4c99090376efa3b`)
            console.log(get.data)
            setData({
                ...data,
                news: get.data.articles
            })
            setNews(get.data.articles)
        } catch (error) {
            console.log(error)
        }
    }

    const renderPost = () => {
        return data.news.map((e, index) => {
            return (
                <Post article={e} />
            )
        })
    }

    return (
        <View>
            <ScrollView style={{ padding: 2 }}>
                {renderPost()}
            </ScrollView>
            {/* <Text>Hello Hooks</Text>
            <Text>{tulisan}</Text>
            <TextInput placeholder="Ketik tulisan"
                onChangeText={text => setTulisan(text)}
            />
            <Text>Nama : {data.nama}</Text>
            <Text>Usia : {data.usia}</Text>
            <Text>Status: {data.status}</Text>
            <TextInput placeholder="Ketik Nama"
                onChangeText={text => setData({
                    ...data,
                    nama: text
                })}
            />
            <Button
                onPress={() => Alert.alert(`${data.nama} berusia ${data.usia}`)}
                title='Klik'
                color='orange'
            /> */}
        </View>
    )
}

export default HomePage;

// // Versi 2
// export default (props) => {
//     return (

//     )
// }