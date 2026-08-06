import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './Styles';
import Header from './components/header/Header';
import FrmCadTask from './components/frmCadTask/FrmCadTask';

function App() {
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.safeArea}>
      <Header />
    <View style={styles.container}>
      <Text style={styles.text}>Bem Vindo ao React List</Text>
      <FrmCadTask />
      <StatusBar style='auto'/>
    </View>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;