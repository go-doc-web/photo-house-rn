import { Text, View, TextInput, StyleSheet } from "react-native";

const RegistrationForm = () => {
  return (
    <>
      <Text>Регистрация</Text>
      <View style={styles.form}>
        <TextInput style={styles.input} />
      </View>
    </>
  );
};
export default RegistrationForm;

const styles = StyleSheet.create({
  input: {
    height: 50,

    marginHorizontal: 16,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 8,
  },
});
