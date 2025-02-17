import Color from "@/constant/Color";
import { Text, View, Image, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Color.WHITE,
      }}
    >
      <Image
        source={require("../assets/images/landing.png")}
        style={{
          width: "100%",
          height: 300,
          marginTop: 70,
        }}
      />

      <View
        style={{
          padding: 25,
          backgroundColor: Color.PRIMARY,
          height: "100%",
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            textAlign: "center",
            color: Color.WHITE,
            fontFamily: "outfit-bold",
          }}
        >
          Welcome to Coaching Guru!
        </Text>

        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            color: Color.WHITE,
            marginTop: 20,
            fontFamily: "outfit",
          }}
        >
          Transform your ideas into engaging educational content, effortlessly
          with AI!
        </Text>

        <View style={styles.button}>
          <Text style={[styles.buttonText, {color: Color.PRIMARY}]}>
            Get Started
          </Text>
        </View>
        <View style={[styles.button, {backgroundColor: Color.PRIMARY, borderWidth: 1, borderColor: Color.WHITE}]}>
          <Text style={[styles.buttonText, {color: Color.WHITE}]}>
            Already have an account?
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button:{
    padding: 15, 
    backgroundColor: Color.WHITE, 
    marginTop: 20,
    borderRadius: 10,
    
  },
  buttonText:{
    textAlign: "center",
    fontSize: 18, 
    fontFamily: "outfit",
  }
})