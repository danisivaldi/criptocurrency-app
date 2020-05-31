// estilos globais para formulários da página de login e register

import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    greeting: {
        textAlign: "center",
        marginTop: 150,
        marginBottom: 70,
        fontSize: 24,
        color: '#161F3D',
    },
    errorMessage: {        
        alignItems: 'center',
        justifyContent: 'center',
    },
    error: {
        color: 'red',
        fontSize: 13,
        textAlign: 'center',
        
    },
    form: {
        marginTop: 20,
        marginHorizontal: 60,
    },
    inputTitle: {
        color: 'grey',
        fontSize: 10,
    },
    input: {
        borderBottomColor: 'grey',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: 'grey',
        marginBottom: 32,
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: '#DA552F',
        borderRadius: 30,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});