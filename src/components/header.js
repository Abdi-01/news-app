import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { Header } from 'react-native-elements';
import { Link } from 'react-router-native';

export default (props) => {
    const [nama, setNama] = useState('nama')

    useEffect(() => getName())

    const getName = () => {
        AsyncStorage.getItem('nama',
            (error, result) => {
                if (error) console.log(error)
                if (result) setNama(result); console.log(nama)
            })
    }
    return (
        <Header
            leftComponent={{ icon: 'menu', color: 'white' }}
            centerComponent={{
                text: nama !== '' ? nama : 'Hello', style: { color: 'white' }
            }}
            rightComponent={
                <Link to='/profile'>
                    <Image source={require('../low_res.png')} style={{ width: 35, height: 35, borderRadius: 90 }} />
                </Link>
            }
        />
    )
}