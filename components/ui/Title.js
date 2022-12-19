import { Text, StyleSheet, Platform } from "react-native";

//For seting reusable title

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    maxWidth: "80%",
    padding: 12,
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    borderWidth: Platform.select({ ios: 0, android: 2 }), //for specifying platform specific styles
    borderColor: "white",
    color: "white",
    fontSize: 24,
    // fontWeight: "bold",
    fontFamily: "open-sans-bold",
    textAlign: "center",
  },
});
