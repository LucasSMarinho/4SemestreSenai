import { Link, useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

export default function Produto() {
    const {id} = useLocalSearchParams();
    return(
    <View>
        <Text>
            Produto Especifico {id}
        </Text>
        <TouchableOpacity style={styles.button}>
            <Link href="/">
            <Text style={styles.buttonText}>Home</Text>
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