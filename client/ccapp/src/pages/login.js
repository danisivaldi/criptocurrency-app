import React, { Component }  from 'react';
import { 
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    StatusBar,
} from 'react-native';
import { globalStyles } from '../styles/global';

export default class Login extends Component {
    static navigationOptions = {
        title: 'Login',
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
        email: "",
        pass: "",
        error: null,
    }

    loginHandle = () => {
        //const { email, pass } = this.state;

        /* loga no app se as credenciais estiverem no bd */
        //firebase
          //  .auth()
           // .signInWithEmailAndPassword(email, pass)
           // .catch(err => this.setState({ error: err.message }));
    }


    render() {
        return (
        <>
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss();
            }}>
                <View style={styles.container}>
                    <Text style={globalStyles.greeting}>Welcome to AppCripto</Text>

                    <View style={globalStyles.errorMessage}>
                        {this.state.error && <Text style={globalStyles.error}>{this.state.error}</Text>}
                    </View>
                    <View style={globalStyles.form}>
                        <View>
                            <Text style={globalStyles.inputTitle}>EMAIL ADRESS</Text>
                            <TextInput 
                                style={globalStyles.input} 
                                autoCapitalize="none"
                                onChangeText={email => this.setState({ email })}
                                value={this.state.email}
                            ></TextInput>
                        </View>

                        <View>
                            <Text style={globalStyles.inputTitle}>PASSWORD</Text>
                            <TextInput 
                                style={globalStyles.input} 
                                autoCapitalize="none" 
                                secureTextEntry
                                onChangeText={pass => this.setState({ pass })}
                                value={this.state.pass}
                            ></TextInput>
                        </View>

                        <TouchableOpacity style={globalStyles.button} onPress={this.loginHandle}>
                            <Text style={globalStyles.buttonText}>Sing in</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.signUpButton}
                            onPress={() => this.props.navigation.navigate("Register")}
                        >
                            <Text style={styles.signUpText}>
                                Fisrt time? <Text style={styles.signUpInsideText}>Sign up</Text>
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </TouchableWithoutFeedback>
        </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    signUpButton: {
        alignSelf: 'center',
        marginTop: 32,
    },
    signUpText: {
        color: 'grey',
        fontSize: 13,
    },
    signUpInsideText: {
        fontWeight: 'bold',
        color: '#DA552F',
    },
});
