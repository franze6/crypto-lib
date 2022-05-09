import React from 'react';
import './shim'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as cryptography from '@liskhq/lisk-cryptography';

export default function App() {

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => console.log('Output:', cryptography.signMessageWithPassphrase('Hello Lisk!',  'robust swift grocery peasant forget share enable convince deputy road keep cheap').message.toString()  + '\xa0\xa0\xa0' + cryptography.bufferToHex(cryptography.signMessageWithPassphrase('Hello Lisk!',  'robust swift grocery peasant forget share enable convince deputy road keep cheap').publicKey).toString() + '\xa0\xa0\xa0' + cryptography.bufferToHex(cryptography.signMessageWithPassphrase('Hello Lisk!',  'robust swift grocery peasant forget share enable convince deputy road keep cheap').signature).toString())}
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>signMessageWithPassphrase</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log('Output:', cryptography.verifyMessageWithPublicKey(cryptography.signMessageWithPassphrase('Hello Lisk!',  'robust swift grocery peasant forget share enable convince deputy road keep cheap')).toString())}
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>verifyMessageWithPublicKey</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log('Output:', cryptography.bufferToHex(cryptography.signDataWithPrivateKey(cryptography.stringToBuffer('Information'), cryptography.stringToBuffer('9d3058175acab969f41ad9b86f7a2926c74258670fe56b37c429c01fca9f2f0f'))).toString())}
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>signDataWithPrivateKey</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log('Output:', cryptography.bufferToHex(cryptography.signDataWithPassphrase(cryptography.stringToBuffer('Information'), 'Keyword')).toString())}
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>signDataWithPassphrase</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log('Output:', cryptography.bufferToHex(cryptography.signData(cryptography.stringToBuffer('Information'), 'Keyword')).toString())}
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>signData</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log('Output:', cryptography.verifyData(cryptography.stringToBuffer('Information'), cryptography.stringToBuffer('9d3058175acab969f41ad9b86f7a2926c74258670fe56b37c429c01fca9f2f0f'), cryptography.stringToBuffer('bce40d3176e31998ec435ffc2993b280')).toString())}
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>verifyData</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
