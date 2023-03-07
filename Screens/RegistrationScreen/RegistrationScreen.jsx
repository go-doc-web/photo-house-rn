import { Text, View, StyleSheet, ImageBackground } from "react-native";

import RegistrationForm from "./RegistrationForm/RegistrationForm";

const RegistrationScreen = () => {
  return (
    <View style={styles.contaner}>
      <ImageBackground
        style={styles.imageBg}
        source={require("../../assets/images/main_bg.jpg")}
      >
        <View style={styles.underBg}>
          <View style={styles.avatar}>
            <View style={styles.addAvatar}>
              <Text style={styles.addBtn}>+</Text>
            </View>
          </View>
          <RegistrationForm />
        </View>
      </ImageBackground>
    </View>
  );
};
export default RegistrationScreen;

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  underBg: {
    position: "relative",
    backgroundColor: "#fff",
    width: "100%",
    height: "70%",

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatar: {
    position: "absolute",
    top: -60,
    right: "50%",
    transform: [{ translateX: 60 }],

    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  addAvatar: {
    position: "absolute",
    right: -12.5,
    bottom: 16,
    width: 25,
    height: 25,
    borderRadius: 100,
    borderColor: "#FF6C00",
    borderWidth: 1,
    borderStyle: "solid",

    justifyContent: "center",
    alignItems: "center",
  },
  addBtn: {
    fontSize: 13,
    color: "#FF6C00",
  },
});
