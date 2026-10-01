import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/HomeScreen';
import { UserFormScreen } from './src/UserFormScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff',
          },
          headerTintColor: isDarkMode ? '#ffffff' : '#000000',
        }}
      >
        <Stack.Screen name="Home" options={{ title: 'Список користувачів' }}>
          {(props) => (
            <HomeScreen
              {...props}
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="UserForm" options={{ title: 'Новий користувач' }}>
          {(props) => (
            <UserFormScreen
              {...props}
              isDarkMode={isDarkMode}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}