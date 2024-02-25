// App.js
import React, { useState } from "react";
import { View, SafeAreaView, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import InputComponent from "./components/InputComponent";

const App = () => {

  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  const handleInput = (text) => {
    setData([...data, text]); 
  }

  const handlerSubmit = () => {
    setCount(count+1); 
  }
  const handleItemPress = (item)=>{
      
  }
  const renderItem = ({ item }) => 
  <TouchableOpacity onPress={handleItemPress}>
    <View style={styles.itemContainer}>
      <Text style={styles.item}>{item}</Text>
    </View>
  </TouchableOpacity>
  
 
    
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner_container}>
        <View style={styles.counterContainer}>
          <Text style={styles.text}>Yapılacaklar</Text>
          <Text style={styles.count}>{count}</Text>
        </View>

        <FlatList
          style={styles.list}
          data={data}
          renderItem={renderItem} 
          keyExtractor={(item) => item.toString()}
        />
        <InputComponent
          onSearch={handleInput} 
          handlerSubmit={handlerSubmit} 
          style={styles.input}
        />
      </View>

    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  inner_container: {
    flex: 1,
    padding: 30
  },
  counterContainer:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  text: {
    color: 'gold',
    fontSize: 34
  },
  count:{
    color:'gold',
    fontSize: 34
  },  
  input: {
    marginBottom: 10,
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'gold'
  },
  list: {
    flex:1
  },
  itemContainer: {
    backgroundColor:'green',
    height:50,
    justifyContent:'center',
    borderRadius:8,
    marginBottom:10,
    padding:10
  },
  item:{
    color: 'white',
    fontSize: 25,
  }
});
