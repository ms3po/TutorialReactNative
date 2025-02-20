import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import React from "react";
import Color from "@/constant/Color";
import { useRouter } from "expo-router";
import {auth} from "./../../config/firebaseConfig";
import {createUserWithEmailAndPassword, User} from "firebase/auth";
import {db} from "./../../config/firebaseConfig";
import {setDoc, doc} from "firebase/firestore";


export default function SignUp() {
  const router = useRouter();

  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [error, setError] = React.useState("");

  const onChangeInputField = (
    value: any,
    setFunction: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setFunction(value as string || "");
  };

  const createNewAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then( async (response) => {
      const user = response.user;
      console.log(user);
      await saveUser(user);
      //Save User to Database
    }).catch((error) => {
      console.log(error);
      setError(error.message);
    })
  }

  const saveUser = async (user : User) => {
    await setDoc(doc(db, "users", email),{
      name: fullName,
      email: email,
      member: false,
      uid : user?.uid,
    })
  }

  //Navigation to new Screen


  const styles = StyleSheet.create({
    textInput: {
      width: "100%",
      padding: 10,
      fontSize: 18,
      marginTop: 20,
      borderBottomWidth: 1,
      borderBottomColor: Color.PRIMARY,
      fontFamily: "outfit",
      color: "black",
    },
  });

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: Color.WHITE,

        flex: 1,
        padding: 20,
      }}
    >
      <View
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: 40,
          padding: 25,
          backgroundColor: Color.WHITE,

          width: "100%",
        }}
      >
        <Image
          source={require("./../../assets/images/logo.png")}
          style={{
            width: 180,
            height: 180,
          }}
        />
        <Text
          style={{
            fontSize: 30,
            fontFamily: "outfit-bold",
          }}
        >
          Create new Account
        </Text>

        <TextInput
          style={styles.textInput}
          placeholder="Full Name"
          placeholderTextColor={"darkgray"}
          onChange={(value) => onChangeInputField(value, setFullName)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="E-Mail"
          placeholderTextColor={"darkgray"}
          onChange={(value) => onChangeInputField(value, setEmail)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor={"darkgray"}
          onChange={(value) => onChangeInputField(value, setPassword)}
        />
        <Text>{error}</Text>
      </View>

      <View
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 50,
        }}
      >
        <TouchableOpacity
          onPress={createNewAccount}
          style={{
            marginBottom: 20,
            backgroundColor: Color.PRIMARY,
            width: "100%",
            height: 50,
            borderRadius: 100,
          }}
        >
          <Text
            style={{
              padding: 10,
              fontFamily: "outfit",
              fontSize: 20,
              color: Color.WHITE,
              textAlign: "center",
            }}
          >
            Create Account
          </Text>
        </TouchableOpacity>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontFamily: "outfit",
              color: "black",
            }}
          >
            Already have an account?{" "}
          </Text>
          <Pressable onPress={() => router.push("./../auth/signIn")}>
            <Text
              style={{
                color: Color.PRIMARY,
                fontFamily: "outfit-bold",
              }}
            >
              Sign-In here
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
