import React, { Component }  from 'react';
import { 
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import { globalStyles } from '../styles/global';

export default class Register extends Component {
    static navigationOptions = {
        title: 'Register',
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
        name: "",
        email: "",
        pass: "",
        error: null,
    };

    singUpHandle = () => {
        /* cria usuário novo e registra no bd */
        //firebase
          //  .auth()
          //  .createUserWithEmailAndPassword(this.state.email, this.state.pass)
          //  .then(credentials => {
          //     return credentials.user.updateProfile({
          //          username: this.state.name
          //      })
          //  })
          //  .catch(err => this.setState({ error: err.message }));
    };

    render() {
        return (
        <>
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss();
            }}>
                <View style={styles.container}>
                    <Text style={globalStyles.greeting}>Enter your credentials</Text>

                    <View style={globalStyles.errorMessage}>
                        {this.state.error && <Text style={globalStyles.error}>{this.state.error}</Text>}
                    </View>
                    {/* formulário de cadastro */}
                    <View style={globalStyles.form}>
                        <View>
                            <Text style={globalStyles.inputTitle}>FULL NAME</Text>
                            <TextInput 
                                style={globalStyles.input} 
                                autoCapitalize="none"
                                onChangeText={name => this.setState({ name })}
                                value={this.state.name}
                            ></TextInput>
                        </View>

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

                        <TouchableOpacity style={globalStyles.button} onPress={this.singUpHandle}>
                            <Text style={globalStyles.buttonText}>Sing up</Text>
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
});
