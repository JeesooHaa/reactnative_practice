import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from "./Weather";
import * as Calendar from 'expo-calendar';

export default class App extends Component {
  state = {
    isLoaded: true
  }
  render() {
    const { isLoaded } = this.state;
    return (
      <View style={styles.container}>
        {isLoaded ? (
          <Weather />) : (
          <View>
            <Text>Getting the fucking weather</Text>
          </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

// 범인 1 expo => expo-linear-gradient
// 범인 2 StyleSheet 세팅 값
// 공범 1 네트워크 으으 


// import React, { Component } from "react";
// import { StyleSheet, Text, View } from "react-native";
// import Weather from "./Weather";

// export default class App extends Component {
//   state = {
//     isLoaded: true 
//   }
//   render() {
//     const { isLoaded } = this.state;
//     return (
//       <View style={styles.container}>
//         {isLoaded ? <Weather /> : (
//           <View style={styles.loading}>
//             <Text style={styles.LoadingText}>Getting the weather</Text>
//           </View>
//         )}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff'
//   },
//   loading:{
//     flex: 1,
//     backgroundColor:'#FDF6AA',
//     justifyContent: "flex-end",
//     paddingLeft: 25
//   },
//   LoadingText:{
//     fontSize: 38,
//     marginBottom: 100
//   }
// });