import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// NAVIGATION //
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
// SCREENS //
import Login from "./screens/Login/Login"
import Register from "./screens/Login/Register"
import ForgotPassword from "./screens/Login/ForgotPassword"
import Index from "./screens/Login/Index"
// DATABASE //
import firebase from "../database/firebase" //esta linea sirve para inicializar el backend

const Stack = createStackNavigator()

export default function App() {

  const [userId, setUserId]= useState(null)

  const USER_LOGIN= '@user_login'

  const handlerValor = async () => {
    let storageUser = await AsyncStorage.getItem(USER_LOGIN)
    storageUser = JSON.parse(storageUser)
    if(storageUser){
       setUserId(storageUser.user.uid)
    } else {
      console.log('no hay usuario logeado')
    }
   
   }

   useEffect(() => {
    handlerValor()
  },[])

  if(!userId){
    return(
      <NavigationContainer>
      <Stack.Navigator screenOptions={ { headerShown: false } }>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
        <Stack.Screen name="Index" component={Index}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
  } else {
    return (
      <NavigationContainer>
      <Stack.Navigator screenOptions={ { headerShown: false } }>
        <Stack.Screen name="Index" component={Index}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
  
}