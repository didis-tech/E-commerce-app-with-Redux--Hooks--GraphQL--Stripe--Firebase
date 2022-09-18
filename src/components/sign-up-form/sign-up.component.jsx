import { useContext, useState } from "react";
import { UserContext } from "../../context/user.context";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { SignUpContainer, SignUpH2 } from "./sign-up-form.styles";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmpassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmpassword } = formFields;

  const resetForm = () => {
    setFormFields(defaultFormField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmpassword) {
      alert("password do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const userData = {
        ...user,
        displayName,
      };
      console.log(userData);
      const userDocRef = await createUserDocumentFromAuth(userData);
      resetForm();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("error creating the user", error.message);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  const signUpGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
  };
  return (
    <SignUpContainer>
      <SignUpH2>Don't have an account</SignUpH2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display name"
          type="text"
          name="displayName"
          id="display_name"
          onChange={handleChange}
          value={displayName}
          required
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={email}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          autoComplete="false"
          id="password"
          onChange={handleChange}
          value={password}
          required
        />
        <FormInput
          label="Confirm Password"
          type="password"
          autoComplete="false"
          id="confirm_password"
          name="confirmpassword"
          onChange={handleChange}
          value={confirmpassword}
          required
        />
        {/* <Button/> */}
        <div className="buttons-container">
          <Button type="submit">Sign Up</Button>

          <Button
            type="button"
            onClick={signUpGoogleUser}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            Google SignUp
          </Button>
        </div>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;
