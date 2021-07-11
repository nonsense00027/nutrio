import React, { useState, useEffect } from "react";
import styles from "./styles";
import {
  Text,
  View,
  TextInput,
  Picker,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { useFirebaseContext } from "../../context/FirebaseContext";
import { collectIdsAndDocs } from "../../shared/utilities";
import LoadingScreen from "../../components/LoadingScreen";
import { Button } from "react-native-elements";

export default function Register({ navigation }) {
  const { auth, database } = useFirebaseContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");

  const handleRegister = () => {
    setLoading(true);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        let user = res.user;
        database.collection("profile").doc(user.uid).set({
          name,
          email,
          password,
          profileComplete: false,
          role: "pregnant",
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        // ToastAndroid.showWithGravityAndOffset(
        //   "Something went wrong, please try again.",
        //   ToastAndroid.SHORT,
        //   ToastAndroid.BOTTOM,
        //   0,
        //   50
        // );
        setLoading(false);
      });
  };

  const noEmpty = () => {
    return email.length > 0 && password.length > 0 && name.length > 0;
  };

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.login}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <View style={styles.login__header}>
            <Text style={styles.login__title}>Create your account</Text>
          </View>
          <View style={styles.login__error}>
            {error && <Text style={styles.login__errorText}>{error}</Text>}
          </View>
          <TextInput
            style={styles.login__formTextInput}
            autoFocus
            onChangeText={(val) => setName(val)}
            value={name}
            placeholder="Full name"
          />
          <TextInput
            style={styles.login__formTextInput}
            onChangeText={(val) => setEmail(val)}
            value={email}
            placeholder="Email"
          />
          <TextInput
            style={styles.login__formTextInput}
            onChangeText={(val) => setPassword(val)}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
          />

          <Button
            title="Get started"
            buttonStyle={styles.login__button}
            titleStyle={styles.login__buttonLabel}
            disabled={!noEmpty()}
            loading={loading}
            onPress={() => handleRegister()}
          />
        </View>
        <View style={{ flex: 0.2 }}>
          <View style={styles.login__signup}>
            <Text>ALREADY HAVE AN ACCOUNT? </Text>
            <TouchableOpacity
              style={styles.login__signupButton}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.login__signupButtonText}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
