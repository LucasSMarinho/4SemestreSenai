import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';

export default function AppScroll() {
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.safeArea}>
    <ScrollView  style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.text}>Bem Vindo ao React List, um aplicativo nativo e expo</Text>
      <StatusBar style='auto' />
    </ScrollView>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}