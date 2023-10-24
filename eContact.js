import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, SafeAreaView, Platform, Alert } from 'react-native';
import { useRouter } from "expo-router";

const eContact = () => {
  //inputs has a list of all the inputs, resized
  //global.inputs has a resizeable list of all inputs, but when new inputs are created (not entered), it creates a '' in its slot
  const router = useRouter();
  const [inputs, setInputs] = useState(global.inputs);

  const handleInputChange = (text, index) => {
    setInputs((prevInputs) => {
      const updatedInputs = [...prevInputs];
      updatedInputs[index] = text;
      return updatedInputs;
    });
  };

  const handleAddInput = () => {
    // console.log(global.contactnum);
    // global.contactnum++;
    // global.inputs.push('');
    if (inputs.length < 5) {
      setInputs((prevInputs) => [...prevInputs, `${global.numbers[inputs.length]}`]);
    }
    // console.log(global.numbers);
  };

  const handleRemoveInput = (index) => {
    setInputs((prevInputs) => {
      const updatedInputs = [...prevInputs];
      updatedInputs.splice(index, 1);
      return updatedInputs;
    });
  };

  const handleSubmit = () => {
    let isValid = true;
    global.inputs = inputs;
    for(let eachNum = 0; eachNum < 5; eachNum++) {
      if(inputs[eachNum] === undefined) {
        global.numbers[eachNum] = '';
      }
    }
    console.log(`global numbers: ${global.numbers}`);
    console.log(`global inputs: ${global.inputs}`);
    console.log(`inputs: ${inputs}`);
    for (let i = 0; i < global.inputs.length; i++) {
      if (global.inputs[i].length !== 10) {
        isValid = false;
        break;
      }
    }
    if (isValid) {
      console.log('Input values:', inputs);
      router.back()
    } else {
      Alert.alert('Phone Number Invalid', 'Please enter a valid 10-digit phone number (no symbols)');
    
    global.contactnum = 0;
    }
  
  };  

  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Set up Emergency Phone Numbers</Text>
      </View>
      <View style={styles.inputContainer}>
        {inputs.map((input, index) => (
        <View style={styles.inputRow} key={index}>
          <Text style={styles.text}>+1</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={input}
            onChangeText={(text) => handleInputChange(text, index)}
            keyboardType="numeric" // Only allow numbers
          />
          {index > 0 && (
            <Button
              title="Remove"
              onPress={() => handleRemoveInput(index)} color = '#078281'
            />
          )}
        </View>
      ))}
        
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Add Number" onPress={handleAddInput} disabled={inputs.length >= 5} color = '#078281'/>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Confirm" onPress={handleSubmit} color = '#078281' />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Back" onPress={() => {router.back()}} color = '#078281' />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 13,
    borderTopWidth: 40,
    borderColor: '#078281',
  },
  titleContainer: {
    marginBottom: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#078281"
  },
  inputContainer: {
    alignItems: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingLeft: 10,
  },
  buttonContainer: {
    marginTop: 10,
    color: '#078281'
  },
});

export default eContact;
// export {inputs};