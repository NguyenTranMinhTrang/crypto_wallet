import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import Tabs from './app/navigation/tabs';
import { Provider } from 'react-redux';
import store from './app/redux/store';


const Stack = createNativeStackNavigator();

const App = () => {

  const [loaded] = useFonts({
    "Roboto-Black": require('./app/assets/fonts/Roboto-Black.ttf'),
    "Roboto-Bold": require('./app/assets/fonts/Roboto-Bold.ttf'),
    "Roboto-Regular": require('./app/assets/fonts/Roboto-Regular.ttf'),
    "Roboto-Light": require('./app/assets/fonts/Roboto-Light.ttf'),
  })

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName={'MainLayout'}
        >
          <Stack.Screen
            name="MainLayout"
            component={Tabs}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default () => {
  return <App />;
};
