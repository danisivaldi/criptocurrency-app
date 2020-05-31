import React, { Component }  from 'react';
import { 
    StyleSheet,
    View,
    ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class Loading extends Component {
    async componentDidMount() {
        const token = await AsyncStorage.getItem('@CcApp:token');
        this.props.navigation.navigate(token ? 'Home' : 'Login')
    }

    render() {
        return (
        <>
            <View style={styles.container}>
                <ActivityIndicator size="large"></ActivityIndicator>
            </View>
        </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

