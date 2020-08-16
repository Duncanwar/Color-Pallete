/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState,useEffect} from 'react';
// import Player from './sound'
import axios from 'axios'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Image
} from 'react-native';

import soundPlayer from 'react-native-sound-player'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
 import H5AudioPlayer from 'react-h5-audio-player';

  
const App = () => {
  
  const [da,setDa] = useState([])
  const [au,setAu] = useState([])
  const dn = async () =>{
  const api = await axios('http://192.168.8.100:6000/api/v1/courses')
  const json = await api.data.data
  setDa(json)
  }

 
useEffect(()=>{
  dn()
},[])
  return (
    
    <>
    <Text>Duncan
      
       </Text>
   <FlatList 
   data={da}
  keyExtractor={(item) => item.ObjectId}
   renderItem={item =>(
     <View>
       {console.log(da)}
       <Text>{item.item.courseName}</Text>
       <Image   style={{ width: 400, height: 400, marginBottom: 10 }} source={
         {uri:item.item.coursePhoto }}></Image>
     </View>
   )}
   />
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  image:{
    width:500 ,
  }
});

export default App;
