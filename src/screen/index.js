import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  googleSignInRequest,
  googleSignOutRequest,
} from '../helper/GoogleSigninHelper';

export default function App() {
  const signInWithGoogle = async () => {
    try {
      const response = await googleSignInRequest();
      if (response) {
        console.log({response});
        googleSignOutRequest();
      }
    } catch (err) {
      console.error({error: err?.message});
    }
  };

  return (
    <SafeAreaView style={styles.flexCenter}>
      <TouchableOpacity onPress={signInWithGoogle}>
        <Text>Google Signin</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
