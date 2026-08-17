// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// import Profile from './components/Profile';

import Checklist from './components/Checklist';
import FlatMap from './components/FlatList';
import KeyboardExp from './components/KeyboardExp';
import LocalStorage from './components/LocalStorage';
import Notes from './components/Notes';
import PlatformExample from './components/PlatformExample';
import Toggle from './components/Toggle';
import TwoScreen from './components/TwoScreen';

// import Button from "./components/Button";

export default function App() {
  return (
    // <Profile />
    // <Toggle />
    // <Notes />
    // <Checklist />
    // <FlatMap />
    // <PlatformExample />
    // <TwoScreen />
    // <KeyboardExp />
    <LocalStorage />
    // <Button/>
    // <View style={styles.screenContainer}>
    //   {/* PARENT VIEW: Defaults to flexDirection: 'column' (top to bottom) */}

    //   {/* This stretches across the top because the parent is a column */}
    //   <View style={styles.header}>
    //     <Text style={styles.headerText}>My Flexbox App</Text>
    //   </View>

    //   {/* MIDDLE VIEW: We change this one to 'row' so the children go side-by-side */}
    //   <View style={styles.rowContainer}>

    //     {/* These three boxes will sit next to each other */}
    //     <View style={styles.box1}><Text>1</Text></View>
    //     <View style={styles.box2}><Text>2</Text></View>
    //     <View style={styles.box3}><Text>3</Text></View>

    //   </View>

    //   {/* This takes up the remaining space at the bottom (flex: 1) */}
    //   <View style={styles.footer} />

    // </View>
  );
}

// const styles = StyleSheet.create({
//   screenContainer: {
//     flex: 1,
//     backgroundColor: "#f0f4f8",
//   },
//   header: {
//     backgroundColor: "blue",
//     padding: 40,
//     alignItems: "center"
//   },
//   headerText: {
//     color: "white",
//     fontSize: 25,
//     fontWeight: "bold",
//   },
//   rowContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     padding: 20,
//     backgroundColor: "white",
//     gap: 4,
//   },
//   box1: {
//     flex: 1,
//     backgroundColor: "tomato",
//     height: 100,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   box2: {
//     flex: 1,
//     backgroundColor: "gold",
//     height: 100,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   box3: {
//     flex: 1,
//     backgroundColor: "limegreen",
//     height: 100,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   footer: {
//     flex: 1,
//     backgroundColor: "#317cc7",
//   },
// });
