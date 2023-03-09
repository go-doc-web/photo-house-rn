import { Text, View, TextInput, StyleSheet } from "react-native";

const RegistrationForm = () => {
  return (
    <>
      <View style={styles.form}>
        <View style={{ alignItems: "center", marginBottom: 32 }}>
          <Text style={styles.titleForm}>Registration</Text>
        </View>
        <View style={{ marginBottom: 16 }}>
          <TextInput style={styles.input} placeholder="Login" />
        </View>
        <View style={{ marginBottom: 16 }}>
          <TextInput style={styles.input} placeholder="Email" />
        </View>
        <View style={{ position: "relative" }}>
          <TextInput style={styles.input} placeholder="Password" />
          <Text style={styles.labelShow}>Show</Text>
        </View>
        <View style={styles.form}></View>
      </View>
    </>
  );
};
export default RegistrationForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 92,
    marginHorizontal: 16,
  },
  titleForm: {
    // alignItems: "center",
    // fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: 30,
    letterSpacing: 0.01,
    color: "#212121",
  },
  input: {
    height: 50,

    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 8,
  },
  labelShow: {
    position: "absolute",
    right: 16,
    bottom: 16,
    fontWeight: 400,
    fontSize: 14,
  },
});
