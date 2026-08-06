import { Text, View } from 'react-native';
import { styles } from './Styles';

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>React List</Text>
    </View>
  );
}

export default Header;