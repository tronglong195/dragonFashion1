import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePop,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utls";

const SignIn = () => {
  useEffect(() => {
    // const response = await getRedirectResult(auth);
    // console.log(response);
    async function createResult() {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }

      console.log(response);
    }
    createResult();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePop();

    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <div>
        <h1>Sign In</h1>
        <button onClick={logGoogleUser}> Sign in with google Popup</button>
        <button onClick={signInWithGoogleRedirect}>
          {" "}
          Sign in with google Redirect
        </button>
      </div>
    </div>
  );
};

export default SignIn;
