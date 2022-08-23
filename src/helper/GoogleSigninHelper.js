import {GoogleSignin} from '@react-native-google-signin/google-signin';

export function googleSignInConfig() {
  GoogleSignin.configure({
    webClientId:
      '583148789149-86afg9gih68g04u8th35poalc2m0qe7n.apps.googleusercontent.com',
    iosClientId:
      '583148789149-dajsbh4d2v9ddtkr5139ae2it67s1abi.apps.googleusercontent.com',
    offlineAccess: true,
  });
}

export async function googleSignInRequest() {
  googleSignInConfig();
  try {
    await GoogleSignin.hasPlayServices();
    const response = await GoogleSignin.signIn();
    return response;
  } catch (error) {
    console.error({error});
  }
  return null;
}

export async function googleSignOutRequest() {
  googleSignInConfig();

  const signInStatus = await getGoogleSignInStatus();

  if (signInStatus) {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (error) {
      console.error({error});
    }
  }
}

export async function getGoogleSignInStatus() {
  const isSignedIn = await GoogleSignin.isSignedIn();
  return isSignedIn;
}
