import AsyncStorage from '@react-native-community/async-storage';
import { create } from 'apisauce';

const api = create({
    baseURL: 'http://localhost:3000/',
});

api.addAsyncRequestTransform(request => async () => {
    const token = await AsyncStorage.getItem('@CcApp:token');

    if (token)
        request.headers['Authorization'] = `Bearer ${token}`;
});

api.addResponseTransform(response => { 
    if (!response.ok) throw response;
});

export default api;