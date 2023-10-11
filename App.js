import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from "./components/Header"
import List from "./components/List"
import Form from "./components/Form"

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    {text: 'fdmgng', key: '1'},
    {text: 'fdmgcvefrgtg', key: '2'},
    {text: 'fdmgng', key: '3'},
  ])

  const addClick = (text) => {
    setListOfItems((list) => {
      return [
        { text: text, key: Math.random().toString(36).substring(7)},
        ...list
      ]
    })
  }

  const delelteString = (key) => {
    setListOfItems((list) => {
      return list.filter(listOfItems => listOfItems.key != key)
    })
  }

  return (
    <View>
      <Header />
      <Form addClick={addClick} />
      <View>
        <FlatList data={listOfItems} renderItem={({ item })=> (
          <List el={item} delelteString= {delelteString} />
        )} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
