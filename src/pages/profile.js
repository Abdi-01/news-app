import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { Redirect } from 'react-router-native';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect:false
        }
    }

    onBtLogout = () => {
        AsyncStorage.removeItem('username', (error) =>
         console.log('Logout Success'))
         this.setState({redirect:true})
    }

    render() {
        if(this.state.redirect){
            return (<Redirect to='/'/>)
        }
        return (
            <View>
                <Button
                    title="LOGOUT"
                    onPress={this.onBtLogout}
                />
            </View>
        );
    }
}

export default Profile;