import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
   flex: 1,
   backgroundColor: '#6a51ae'
  },

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    gap: 100,

    //Colors
    experimental_backgroundImage: 'linear-gradient(35deg, #000000 25%, #036cbd 100%)',
    backgroundImage: 'linear-gradient(35deg, #000000 25%, #0055ff 100%)',
  },

  box: {
    width: 100,
    height: 100,
    backgroundColor: '#ff1900',

    borderRadius: 50,


    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 700
  },

  count: {
    color: 'white',
    fontWeight: 700
  }

})