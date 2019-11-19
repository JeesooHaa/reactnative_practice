import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class Weather extends Component {
  render() {
    return (
      <LinearGradient 
        colors={["#00C6FB", "#005BEA"]} 
        style={styles.container}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});


// import React, { Component } from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { LinearGradient } from "expo"; //view인데 배경색이 gradient인것

// export default class Weather extends Component {
//     render() {
//         return (
//         <LinearGradient
//             colors={["#00C6FB", "#005BEA"]} //from-to 색상 지정
//             style={styles.container} //스타일
//         />
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1
//     }
// });
