import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/home';
import Loading from './pages/loading';
import Login from './pages/login';
import Register from './pages/register';

const MainStack = createStackNavigator({
    Home: Home
});
  
const LoginStack = createStackNavigator({
    Login: Login,
    Register: Register
});

export default createAppContainer(
    createSwitchNavigator(
      {
        Loading: Loading,
        Main: MainStack,
        Login: LoginStack
      },
      {
        initialRouteName: "Loading",
      }
    )
);