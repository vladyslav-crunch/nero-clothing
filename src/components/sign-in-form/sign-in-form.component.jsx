import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import { useDispatch } from "react-redux";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";
import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles";
const defaultFromFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFromFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFromFields);
  };

  const logGoogleUser = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        alert("Incorrect password or email");
      } else console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <p>Sign up with your email and password</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            required: true,
            onChange: handleChange,
            name: "email",
            value: email,
          }}
        />
        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "password",
            value: password,
          }}
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            onClick={logGoogleUser}
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
          >
            Google sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
