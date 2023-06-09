import { useState} from 'react';
import {
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
} from '../../firebase/firebase.utils';
import {SignInContainer, Head, ButtonsContainer} from './sign-in.styles';

import FormInput from '../form-input/form-input.component';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';

const defaultFormFields = {
email: '',
password: '',
};

const SignInForm = () => {
const [formFields, setFormFields] = useState(defaultFormFields);
const { email, password } = formFields;

const resetFormFields = () => {
setFormFields(defaultFormFields);
};

const signInWithGoogle = async () => {
await signInWithGooglePopup();
}

const handleSubmit = async (event) => {
event.preventDefault();
try {
    await signInAuthUserWithEmailAndPassword(
      email,
      password
    );
    resetFormFields();
  } catch (error) {
    switch (error.code) {
      case 'auth/wrong-password':
        alert('incorrect password for email');
        break;
      case 'auth/user-not-found':
        alert('no user associated with this email');
        break;
      default:
        console.log(error);
    }
  }
};

const handleChange = (event) => {
const { name, value } = event.target;

setFormFields({ ...formFields, [name]: value });
};

return (
<SignInContainer>
    <Head>Already have an account?</Head>
    <span>Sign in with your email and password</span>
    <form onSubmit={handleSubmit}>
            <FormInput
            label="Email Address"
            type='email'
            required
            onChange={handleChange}
            name='email'
            value={email}
            />

            <FormInput
            label="Password"
            type='password'
            required
            onChange={handleChange}
            name='password'
            value={password}
            />
            <ButtonsContainer>
                <Button type='submit'>Sign In</Button>
                <Button buttonType={BUTTON_TYPE_CLASSES.google} type ='button'  onClick={signInWithGoogle}>Google Sign in</Button>
            </ButtonsContainer>
    </form>
</SignInContainer>
);
};

export default SignInForm;