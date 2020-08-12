/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const A = ({body})=>(<Text body={body}/>)
const App = () => {
  const renderItem = ({d})=>(<A
     body={d.data[1].body}/>)
  const [da,setDa] = useState([])

  const dn = async () =>{
  const api = await fetch('https://digital-auca.herokuapp.com/api/v1/community/event/view')
  const json = await api.json()
  console.log(json)
  setDa(json.data)
  }
 
useEffect(()=>{
  dn()
},[])
  return (
    
    <>
    <Text>Duncan </Text>
    
    <FlatList 
    data={da}
    renderItem={({item})=> (
      <Text>{item.body}
      </Text>
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
});

export default App;
