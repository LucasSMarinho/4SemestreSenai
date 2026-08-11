import { Text, View } from 'react-native';
import { HeaderStyle } from './HeaderStyle';

function Header() {
  return (
    <View style={HeaderStyle.header}>
      <Text style={HeaderStyle.headerTitle}>Todo List</Text>
    </View>
  );
}

export default Header;