import Color from "@/constant/Color";
import { useRouter } from "expo-router";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Index() {
  const router = useRouter();

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

        <TouchableOpacity style={styles.button}>
          <Text
            style={[styles.buttonText, { color: Color.PRIMARY }]}
            onPress={() => router.push("./auth/signUp")}
          >
            Get Started
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: Color.PRIMARY,
              borderWidth: 1,
              borderColor: Color.WHITE,
            },
          ]}
          onPress={() => router.push("./auth/signIn")}
        >
          <Text style={[styles.buttonText, { color: Color.WHITE }]}>
            Already have an account?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: Color.WHITE,
    marginTop: 20,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "outfit",
  },
});
