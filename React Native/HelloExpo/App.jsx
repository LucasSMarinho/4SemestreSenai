import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './Styles';

export default function App() {

  const [count, setCount] = useState(0)

  const funcCount = () => {
   setCount(count + 1)
  }



  return (
  <SafeAreaProvider>
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <Pressable style={styles.box} onPress={() => funcCount()}> <Text style={styles.text}> Hello World </Text> </Pressable>
      <Text  style={styles.count}> {count} </Text>
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}