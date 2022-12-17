import { Text, StyleSheet } from "react-native";

//For seting reusable title

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    padding: 12,
    borderWidth: 2,
    borderColor: "white",
    color: "white",
    fontSize: 24,
    // fontWeight: "bold",
    fontFamily: "open-sans-bold",
    textAlign: "center",
  },
});
