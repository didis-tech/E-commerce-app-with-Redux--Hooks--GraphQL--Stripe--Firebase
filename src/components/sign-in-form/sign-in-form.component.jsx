import { useState, useContext } from "react";
import { UserContext } from "../../context/user.context";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import "./sign-in-form.styles.jsx";
import {
  SignInButtonsContainer,
  SignInContainer,
  SignInH2,
} from "./sign-in-form.styles.jsx";

const defaultFormField = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { email, password } = formFields;

  const resetForm = () => {
    setFormFields(defaultFormField);
  };

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      resetForm();
    } catch (error) {
      // auth/user-not-found
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;

        default:
          console.log("error logging user", error.message);
          break;
      }
      // if (error.code === "auth/wrong-password") {
      // } else {
      // }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <SignInContainer>
      <SignInH2>Already have an account</SignInH2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          required
        />
        <FormInput
          label="Password"
          autoComplete="false"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          required
        />
        <SignInButtonsContainer>
          <Button type="submit">Sign in</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={logGoogleUser}
          >
            Google SignIn
          </Button>
        </SignInButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
