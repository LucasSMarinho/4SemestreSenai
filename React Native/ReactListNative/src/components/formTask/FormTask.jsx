import { Text, View } from 'react-native';
import { FormTaskStyles } from './FormTaskStyle';

function FormTask() {
  return (
    <View style={FormTaskStyles.frmCadTask}>
      <Text style={FormTaskStyles.frmCadTitle}>Cadastro de tarefas</Text>
    </View>
  );
}

export default FormTask;