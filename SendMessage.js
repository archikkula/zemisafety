import React, { useEffect } from 'react';
import { encode } from 'base-64';
import { View } from 'react-native';
import GetLocation from './GetLocation';


const SendMessage = (props) => {
    useEffect(() => {
        sendSMS();
    }, []);
    <GetLocation />
    console.log("in sendmessage file");
    console.log(global.latitude);
  const sendSMS = async () => {
      const accountSid = '';
      const authToken = '';
      // havent secured sid and token so theyre blank rn, but they work 
      const fromNumber = '+18339843019';
      const toNumbers = global.inputs;
      // const messageBody = `latitude: ${global.latitude}, longitude :${global.longitude}`;
      const currentlocation = `https://maps.google.com/?q=${global.latitude},${global.longitude}`;
      let messageBody = ``;
      if(props.signal === '1') {
        messageBody = `Signal is 1, ${currentlocation}`;
      }
      else if(props.signal === '2') {
        messageBody = `Signal is 2, ${currentlocation}`;
       }
      else {
        messageBody = `Signal is 3, ${currentlocation}`;
      }

    const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;
    try {
        const promises = toNumbers.map(async (toNumber) => {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization: `Basic ${encode(`${accountSid}:${authToken}`)}`,
            },
            body: `To=${encodeURIComponent(toNumber)}&From=${encodeURIComponent(fromNumber)}&Body=${encodeURIComponent(
              messageBody
            )}`,
          });
    
          return response.json();
        });
    
        const results = await Promise.all(promises);
        console.log(results);
      } catch (error) {
        console.error(error);
      }
  };

  return true; 
};

export default SendMessage;
