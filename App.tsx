import React from "react"
import {View, Text, StyleSheet} from "react-native"

export default function App(){
  return(
    <View style={styles.screenContainer}>
      <Text style={styles.title}>First App screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer:{
    flex: 1,
    backgroundColor: "#f0f4f8",
    justifyContent: "center",
    alignItems: "center"
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  }
})