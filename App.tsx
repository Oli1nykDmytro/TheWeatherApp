import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from 'react';
import { View, Text, StyleSheet, Dimensions } from "react-native";
import * as Location from 'expo-location';

type Props = {
  text:string
}

const App:React.FC<Props> = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

useEffect(()=>{
    let status = Location.requestPermissionsAsync().then(x => console.log(x));
    console.log('status', status);
},[])

  let text:string = 'Whaiting...'

  return (
    <View style={styles.container}>
      <Text> {text} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;