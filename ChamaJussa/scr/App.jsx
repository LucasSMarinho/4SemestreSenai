import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useFonts, Montserrat_700Bold, Montserrat_300Light } from "@expo-google-fonts/montserrat";
import { styles } from "./Styles";
import { Image } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_300Light
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} >
      <Image source={require("../assets/logo.png")} style={styles.appImage}/>
      <View style={styles.loginBox}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>Chama Jussa</Text>
          <Text style={styles.subTitle}>Gereciamento de ordens de serviço</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputBox}>
            <Text style={styles.text}>E-mail</Text>
            <TextInput style={styles.inputText} placeholder="E-mail"/>
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.text}>Senha</Text>
            <TextInput style={styles.inputText} placeholder="Senha"/>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Acessar o sistema</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}