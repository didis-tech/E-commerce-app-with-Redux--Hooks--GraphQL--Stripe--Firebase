import { AuthError, AuthErrorCodes } from "firebase/auth";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../store/user/user.action";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import "./sign-in-form.styles";
import {
  SignInButtonsContainer,
  SignInContainer,
  SignInH2,
} from "./sign-in-form.styles";

const defaultFormField = {
  email: "",
  password: "",
};

const SignIn = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormField);
  const { email, password } = formFields;

  const resetForm = () => {
    setFormFields(defaultFormField);
  };

  const logGoogleUser = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));

      resetForm();
    } catch (error) {
      // auth/user-not-found
      switch ((error as AuthError).code) {
        case AuthErrorCodes.INVALID_PASSWORD:
          alert("Incorrect password");
          break;
        case AuthErrorCodes.USER_DELETED:
          alert("no user associated with this email");
          break;

        default:
          console.log("error logging user", error);
          break;
      }
    }
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
