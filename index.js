import { StyleSheet, Text, View, Image, Animated, Button, TouchableOpacity, SafeAreaView} from "react-native";
import { Link } from "expo-router";
import React, {useRef, useEffect, useState} from 'react';
import './global.js'
// import { inputs } from "./eContact";
import { useRouter } from "expo-router";
// import "expo-router/entry";
import GetLocation from "./GetLocation";
import SendMessage from './SendMessage';
import {location} from "./GetLocation";
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons'; 



const FadeInView = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);
  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};

// console.log(global.contactnum);
// global.contactnum += 1;
// console.log(global.contactnum);

export default function Page() {
  let msent = false;
  const router = useRouter();
  // const [showSendMessage, setShowSendMessage] = useState(false);
  const [showSendMessage1, setShowSendMessage1] = useState(false);
  const [showSendMessage2, setShowSendMessage2] = useState(false);
  const [showSendMessage3, setShowSendMessage3] = useState(false);
  const sendMessages1 = () => {
    setShowSendMessage1(true);
  };
  const sendMessages2 = () => {
    setShowSendMessage2(true);
  };
  const sendMessages3 = () => {
    setShowSendMessage3(true);
  };
  useEffect(() => {
    if (showSendMessage1) {
      setShowSendMessage1(false);
    }
  }, [showSendMessage1]);

  useEffect(() => {
    if (showSendMessage2) {
      setShowSendMessage2(false);
    }
  }, [showSendMessage2]);

  useEffect(() => {
    if (showSendMessage3) {
      setShowSendMessage3(false);
    }
  }, [showSendMessage3]);
  // const SendMessages = () => {
  //   console.log('h');
  //   <View>
  //     <SendMessage number = "9393939393" />
  //   </View>
  //   // for(let i = 0; i < global.inputs.length; i++) {
  //   //   return <SendMessage number = "9393939393" />
  //   // }
  // }
  return (
    <SafeAreaView style={styles.container}>
      <Ionicons name="information-circle-outline" size={32} color="white" style = {{top: '3%', left : '50%'}}/>
      <Ionicons name="settings-sharp" size={28} color="white" style = {{top: '-1.75%', left : '38%'}}/>
      <Ionicons name="bluetooth" size={28} color="white" style = {{bottom: '6.3%', right : '47%'}}/>
      <View style = {styles.item}>
        <FadeInView>
          <Image source={require('./ZemiWhite.png')} style={styles.zemiImage}/>
        </FadeInView>
      </View>
      <View style = {styles.item}>
        <Image source={require('./ZemiTextWhite.png')} style={styles.zemiText} />
      </View>
      {/* <View style = {styles.item}>
        <Text style={{color: "white", top: '0%', fontFamily: 'notoserif', fontWeight: 'bold', fontSize: 18}}>
          Welcome to
        </Text>
      </View> */}
      {/* <View style = {styles.buttonContainer}>
        <Button onPress={() => {router.push("/eContact");}} title="Set Up contacts" color="#B3D7D9" style={styles.container}/>
      </View> */}
      <View>
        <TouchableOpacity onPress={() => {router.push("/eContact");}} style={styles.toContainer}>
          <AntDesign name="contacts" size={24} color="white" />
          <Text style = {{color: "white", fontFamily: "notoserif", fontWeight: "bold", fontSize: 18, marginLeft: 10}}>Set Up Contacts</Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.container}>
        <TouchableOpacity onPress={() => {router.push("/TabScreen");}} style={styles.toContainer}>
          <Ionicons name="chatbubble-ellipses" size={24} color="white" />
          <Text style = {{color: "white", fontFamily: "notoserif", fontWeight: "bold", fontSize: 18, marginLeft: 10}}>Personalize Messages</Text>
        </TouchableOpacity>
      </View>
      {/* <Link href="/eContact" style={{right: '30%', top: '30%', color: 'white'}}>
        Set Emergency Contacts
      </Link> */}
      {/* below are the test buttons i used that called the twilio api and sent a text message, each with their separate message
      for now the separate messages are predefined, will change to entered message soon */}
      {/* <View style = {styles.buttonContainer}>
        <Button onPress={sendMessages1} title="test1" color="#B3D7D9" style={styles.container}/>
      </View>
      <View style = {styles.buttonContainer}>
        <Button onPress={sendMessages2} title="test2" color="#B3D7D9" style={styles.container}/>
      </View>
      <View style = {styles.buttonContainer}>
        <Button onPress={sendMessages3} title="test3" color="#B3D7D9" style={styles.container}/>
      </View> */}
      {showSendMessage1 && <SendMessage signal = '1' /> || <GetLocation />}
      {showSendMessage2 && <SendMessage signal = '2' /> || <GetLocation />}
      {showSendMessage3 && <SendMessage signal = '3' /> || <GetLocation />}
      {/* {router.push("/")} */}
      {/* <SendMessage number = "9393939393"/> */}
      {/* console.log(location); */}
    </SafeAreaView>
  );
}
// console.log(texion[0]);

const styles = StyleSheet.create({
  item: {
    marginTop: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 10,
    color: '#078281'
  },
  toContainer: {
    marginTop: 0,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'white',
    padding: 5
  },
  zemiImage: {
    width: 196.9,
    height: 139,
    position: 'relative',
    top: '10%',
    bottom: 0,
    left: 0,
    right: 0
  },
  submitButton: {
    position: 'absolute',
    bottom:0,
    left:0,
  },
  zemiText: {
    width: 124.8 * 2,
    height: 71.6 *2,
    bottom: '20%'
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#078281"
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
