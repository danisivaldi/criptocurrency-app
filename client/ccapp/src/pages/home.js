import React, { Component } from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity, 
    FlatList,
} from 'react-native';

import api from '../services/api'
import AsyncStorage from '@react-native-community/async-storage';

export default class Home extends Component {
    static navigationOptions = {
        title: 'AppCripto',
        headerStyle: {
          backgroundColor: '#DA552F',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
    };

    state = {
        coins: [],
        errorMessage: null
    }

    componentDidMount() {
        this.loadCoins();
    }

    loadCoins = async () => {
        try {
            const response = await api.get('/coins/toplist');

            const { coins } = response.data;
            this.setState({ coins });

          } catch (response) {
            this.setState({ errorMessage: response.data.error });
          }
    }

    signOut = async () => {
        try {
            await AsyncStorage.removeItem('@CcApp:token');
            this.props.navigation.navigate('Login');
        } catch (err) {
            console.log(err)
        }
      };

    renderItem = ({ item }) => (
        <View style={styles.coinContainer}>
            <View style={styles.coinInfo}>
                <View style={styles.coinNameInfo}>
                    <Text style={styles.coinFullName}>{item.fullName}</Text>
                    <Text style={styles.coinName}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.coinPrice}>R$ {item.price}</Text>
                </View>
            </View>
            <View style={styles.coinMarketInfo}>
                <View style= {styles.coinLowHighInfo}>
                    <Text style={styles.lowHighText}>low  </Text>
                    <Text style={styles.lowText}>{item.low}</Text>
                    <Text style={styles.lowHighText}>high  </Text>
                    <Text>{item.high}</Text>
                </View>
                <View>
                    <Text style={[item.changepct > 0 ? styles.coinChangepctPos : styles.coinChangepctNeg]}>
                        {item.changepct > 0 ? '+' : '' } {item.changepct}
                    </Text>
                </View>
            </View>
        </View>
    )

    render() {
        return (
        <>
            <View style={styles.container}>
                <View style={styles.top}>
                    <TouchableOpacity style={styles.topBox} onPress={this.signOut}>
                        <Text style={styles.topBoxText}>Logout</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.coins}
                    keyExtractor={item => item.id}
                    renderItem={this.renderItem}
                />
            </View>
        </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        alignItems: 'flex-end',
        marginVertical: 10,
    },
    topBox: {
        marginHorizontal: 20,
        backgroundColor: '#DA552F',
        borderRadius: 30,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topBoxText: {
        marginHorizontal: 10,
        color: 'white',
        fontWeight: 'bold',
    },
    list: {
        padding: 20,
    },
    coinContainer: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 5,
        padding: 20,
        marginBottom: 20,
    },
    coinInfo: {
        alignItems: 'baseline',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,   
    },
    coinNameInfo: {
        alignItems: 'baseline',
        flexDirection: 'row',
    },
    coinFullName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 10,
    },
    coinName: {
        fontSize: 15,
        color: '#999',
    },
    coinPrice: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    coinMarketInfo: {
        alignItems: 'baseline',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    coinLowHighInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    lowText: {
        marginRight: 20,
    },
    lowHighText: {
        fontSize: 10,
        color: '#999',
        textTransform: 'uppercase'
    },
    coinChangepctPos: {
        fontWeight: 'bold',
        color: 'green',
    },
    coinChangepctNeg: {
        fontWeight: 'bold',
        color: 'red',
    },
});