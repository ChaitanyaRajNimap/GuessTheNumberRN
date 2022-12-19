import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 10,
    marginTop: deviceWidth < 380 ? 18 : 36,
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
