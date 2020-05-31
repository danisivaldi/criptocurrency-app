import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pages/home';
import LoginScreen from './pages/login';
import RegisterScreen from './pages/register';

const Stack = createStackNavigator();

export default function App() {
    state = {
        isLoggedIn: false
    }
    
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {this.state.isLoggedIn ? ( 
                    <Stack.Screen 
                        name='Home'
                        component={HomeScreen}
                        options={HomeScreen.navigationOptions} 
                    />
                ) : (
                    <>
                        <Stack.Screen
                            name='Login'
                            component={LoginScreen}
                            options={LoginScreen.navigationOptions}
                        />
                        <Stack.Screen
                            name='Register'
                            component={RegisterScreen}
                            options={RegisterScreen.navigationOptions}
                        />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    ); 
}