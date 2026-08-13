import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  appImage: {
   height: 200,
   width: 200
  },
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginBox: {
    backgroundColor: "white",
    height: 340,
    width: "80%",
    borderRadius: 5,


    paddingTop: 30,
    padding: 10,
    gap: 20
  },

  title: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 21,
  },

  subTitle: {
    fontFamily: "Montserrat_300Light",
    fontSize: 13,
    fontWeight: 400,
    color: "#868585"
  },

  titleBox: {
    alignItems: "center",
    gap: 10
  },

  inputContainer: {
    alignItems: "center",
    gap: 20
  },

  inputText: {
    backgroundColor: "#F3F4F6",
    height: 35,
    width: "100%",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#0000001f",
    borderRadius: 3,
    padding: 10,
    outlineColor: "#0000002f",
    color: "#4b4b4b"
  },

  text: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 14
  },

  inputBox: {
    width: "90%",
    gap: 7,
  },

  button: {
    backgroundColor: "#10B981",
    height: 35,
    width: "90%",
    borderRadius: 3,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5
  },

  buttonText: {
    color: "white",
    fontFamily: "Montserrat_700Bold",
  }
});