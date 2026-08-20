import { Link } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useRouter } from "expo-router";

export default function Home() {

    const router = useRouter()


    return(
    <View style={styles.container}>
        <Text style={styles.title}>
            Home
        </Text>
        
        <TouchableOpacity style={styles.button} onPress={() => router.push("/perfil")}>
            <Text style={styles.buttonText}>
                Perfil
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
            <Link href="/produtos" style={styles.link}>
            <Text style={styles.buttonText}>
                Produtos
            </Text>
            </Link>
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