import { Text, View } from 'react-native';
import { HeaderStyle } from './HeaderStyle';

function Header() {
  return (
    <View style={HeaderStyle.header}>
      <Text style={HeaderStyle.headerTitle}>To do List</Text>
    </View>
  );
}

export default Header;