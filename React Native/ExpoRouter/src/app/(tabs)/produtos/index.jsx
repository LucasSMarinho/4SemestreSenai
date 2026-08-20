import { View, Text, StyleSheet, Touchable, TouchableOpacity } from "react-native"
import { Link, useRouter } from "expo-router";

export default function Produtos() {

    const router = useRouter()
    

    return(
    <View style={styles.container}>
        <Text style={styles.title}>
            Lista de produto
        </Text>
        <View>
          <Link href="/produtos/10"><Text>Produto 10</Text></Link>
          <Link href="/produtos/20"><Text>Produto 20</Text></Link>
        </View>
        <TouchableOpacity onPress={() => router.back()} style={styles.button}>
          <Text style={styles.buttonText}> Voltar </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.replace("/perfil")} style={styles.button}>
          <Text style={styles.buttonText}> Perfil </Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
       container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
    },

    button: {
    backgroundColor: "#222",
    padding: 15,
    borderRadius: 8,
    width: "90%",
    marginBottom: 5, 
    marginTop: 5 
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  link: {
    width: "100%"
  }
});