import { View, Text, TouchableOpacity } from "react-native";
import { useFonts, Montserrat_700Bold, Montserrat_300Light } from "@expo-google-fonts/montserrat";
import { styles } from "./Styles";

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_300Light
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        <View style={styles.titleBox}>
        <Text style={styles.title}>Chama Jussa</Text>
        <Text style={styles.subTitle}>Gereciamento de ordens de serviço</Text>
        </View>
        <View style={styles.inputBox}>
        </View>
      </View>
      
    </View>
  );
}