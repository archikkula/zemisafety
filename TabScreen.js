import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const TabScreen = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [textInputs, setTextInputs] = useState([global.m1, global.m2, global.m3]);
  const tabs = ['Message 1', 'Message 2', 'Message 3'];
  const navigation = useNavigation();

  const handleConfirm = () => {
    const updatedInputs = [...textInputs];
    updatedInputs[tabIndex] = textInputs[tabIndex];
    setTextInputs(updatedInputs);
    console.log('Text Inputs:', textInputs);
    global.m1 = textInputs[0];
    global.m2 = textInputs[1];
    global.m3 = textInputs[2];
    navigation.goBack();
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', borderWidth: 13, borderTopWidth: 40, borderColor: '#078281' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setTabIndex(index)}
            style={{ padding: 10, borderBottomWidth: 2, borderBottomColor: index === tabIndex ? '#078281' : 'transparent' }}
          >
            <Text style={{ color: '#078281' }}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 18, marginBottom: 10, color: '#078281' }}>{tabs[tabIndex]}</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10, width: '80%'}}
          placeholder="Enter text"
        //   placeholderTextColor="#078281"
          value={textInputs[tabIndex]}
          onChangeText={(text) => {
            const updatedInputs = [...textInputs];
            updatedInputs[tabIndex] = text;
            setTextInputs(updatedInputs);
          }}
        />
        <View>
          <Button title = 'Confirm' onPress={handleConfirm} color={'#078281'} style={{ color: '#078281', padding: 10 }}>
            {/* <Text style={{ color: 'white', textAlign: 'center' }}>'Confirm'</Text> */}
          </Button>
        </View>
        <View style = {{marginTop: 10}}>
          <Button title = "Back" onPress={handleBack} color = {'#078281'} style={{ backgroundColor: '#078281', padding: 10, marginTop: 10 }} />
            {/* <Text style={{ color: 'white', textAlign: 'center' }}>Back</Text> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TabScreen;
