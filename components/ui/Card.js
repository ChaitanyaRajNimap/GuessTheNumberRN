import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  <View style={styles.card}>{children}</View>;
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
    elevation: 10, //Like box-shadow only for Android
    justifyContent: "center",
    shadowColor: "black", // Like boax-shadow for IOS
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.25,
  },
});
