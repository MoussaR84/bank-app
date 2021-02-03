import React from 'react';
// import {Fontisto,MaterialIcons} from "expo/vector-icons";
import Textjs from "../components/Text";
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default  Touchscreen = ()=>{
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MyBankApp</Text>
      <TouchableOpacity style={styles.touchable}>
        <View style={styles.circle1} >
        <View style={styles.circle2}>
          <View style={styles.circle3}>
            <TouchableOpacity>
              {/* <MaterialIcons name="fingerprint" size={64} color="#ffffff"/> */}
            </TouchableOpacity>
          </View>
        </View>
        </View>
            
      </TouchableOpacity>
      <Text>Touch ID sensor for access to {"/n"} you mybank account</Text>
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
  text:{
    textAlign:"center",
    color:"#964FF0",
    margin:32,
    fontWeight:"900",
  },
  touchable:{
    borderRadius:100,
  },
  circle1:{
    backgroundColor:"#1e1e1e",
    borderRadius:30,
  },
  circle2:{
    backgroundColor:"#5196f410",
    borderRadius:30,
  },
  circle3:{
    backgroundColor:"#5196f430",
    borderRadius:30,
  }
});

// const Circle=styled.View({
//   backgroundColor=(props)=>{(props.backgroundColor)},
// })

// const Touch=styled.TouchableOpacity({
//   backgroundColor="#5196f4",
//   padding:8,
  
  
// })
