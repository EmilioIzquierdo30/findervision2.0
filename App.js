import React, { useState, useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image } from "react-native";

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "198114410227-glr0q69n847lfjtcu3a288raj42lnuak.apps.googleusercontent.com",
    iosClientId: "198114410227-k1u5vssjlbukfia8r9o1c1ib0hrau1nl.apps.googleusercontent.com",
    webClientId: "198114410227-fmcs43vnujen8qnnhda807mi7a0qg04g.apps.googleusercontent.com",
    scopes: ["profile", "email"],
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      setToken(authentication.accessToken);
      fetchUserInfo(authentication.accessToken);
    }
  }, [response]);

  async function fetchUserInfo(accessToken) {
    try {
      const res = await fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      const userData = await res.json();
      setUserInfo(userData);
    } catch (error) {
      console.error("Error fetching user info: ", error);
    }
  }

  return (
    <View style={styles.container}>
      {!userInfo ? (
        <Button
          title="Sign in with Google"
          disabled={!request}
          onPress={() => promptAsync()}
        />
      ) : (
        <View style={styles.card}>
          {userInfo.picture && (
            <Image source={{ uri: userInfo.picture }} style={styles.image} />
          )}
          <Text style={styles.text}>Email: {userInfo.email}</Text>
          <Text style={styles.text}>
            Verified: {userInfo.verified_email ? "Yes" : "No"}
          </Text>
          <Text style={styles.text}>Name: {userInfo.name}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  card: {
    padding: 15,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
});
