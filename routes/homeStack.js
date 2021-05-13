import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Home';
import Domestic from '../components/DomesticFile';
import Wild from '../components/WildFile';
import Acquatic from '../components/AcquaticFile';
import Birds from '../components/BirdsFile';
import Browser from '../shared/Browser'
// import ReviewDetails from '../screens/ReviewDetails'
// import Header from '../shared/header'

const Stack = createStackNavigator()

export default Navigator = () => {
  return (
    <NavigationContainer initialRouteName='Home'>
      <Stack.Navigator>
        <Stack.Screen 
         name='Home' 
         component={Home}
         options={ 
           {
             headerShown: false,
             headerStyle: {  }
           }
         } 
         />
        <Stack.Screen 
        name='Domestic' 
        component={Domestic} 
        options={
          { 
            headerShown: false,
            title: '' 
          }
        }
         />
         <Stack.Screen 
        name='Wild' 
        component={Wild} 
        options={
          { 
            headerShown: false,
            title: '' 
          }
        }
         />
          <Stack.Screen 
        name='Acquatic' 
        component={Acquatic} 
        options={
          { 
            headerShown: false,
            title: '' 
          }
        }
         />
          <Stack.Screen 
        name='Birds' 
        component={Birds} 
        options={
          { 
            headerShown: false,
            title: '' 
          }
        }
         />
         <Stack.Screen 
        name='Browser' 
        component={Browser} 
        options={
          { 
            // headerShown: false,
            title: '' 
          }
        }
         />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
