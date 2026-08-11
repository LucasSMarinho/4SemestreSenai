import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './Styles';
import Header from './components/header/Header';
import TaskList from './components/taskList/TaskList'
import FormTask from './components/formTask/FormTask'
import { TaskProvider } from './context/TaskProvider'

function App() {
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.safeArea}>
      <TaskProvider>
    <View style={styles.container}>
      
      <Header />
      <FormTask />
      <TaskList />
      <StatusBar style='auto'/>
    
     </View>
     </TaskProvider>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;