import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 10,
    marginTop: 35,
    marginHorizontal: 24,
    alignItems: "center",
    backgroundColor: Colors.primary800,
    // elevation: 4,
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.25,
  },
});
