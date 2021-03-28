import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import { View } from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Redirect } from 'react-router-native';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            redirect: false
        }
        AsyncStorage.getItem('username', (error, result) => {
            if (Boolean(result) && result.length > 0) {
                this.setState({ redirect: true })
            }
        })
    }

    onBtLogin = () => {
        AsyncStorage.setItem('username', this.state.username,
            async (err, result) => {
                if (err) {
                    console.log(err)
                }
                console.log("Login", await AsyncStorage.getItem('username'))
                if (await (await AsyncStorage.getItem('username')).length > 0) {
                    this.setState({ redirect: true })
                }
            })
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to="/home" />
            )
        }
        return (
            <View style={{ flex: 1, backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: wp('70%') }}>
                    <Input
                        leftIcon={<Icon
                            name="user"
                            size={24}
                            type='feather'
                            color='blue'
                        />}
                        placeholder="Username"
                        placeholderTextColor='blue'
                        onChangeText={e => this.setState({ username: e })}
                    />
                    <Button
                        title="Login"
                        onPress={this.onBtLogin}
                    />
                </View>
            </View>
        );
    }
}

export default LoginPage;