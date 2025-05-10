import React, {useState} from 'react';
import {Authorization} from './src.tsx/authorization';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Authorization />
    </View>
  );
};

export default App;
