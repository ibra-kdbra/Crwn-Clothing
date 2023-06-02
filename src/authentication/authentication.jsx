import React from "react";
import SignUpForm from '../components/sign-up/sign-up.component'
import SignInForm from "../components/sign-in/sign-in.component";
import {AuthContainer} from './authentication.styles'

const Authentication= ()=>{
    return(
        <AuthContainer>
            <SignInForm/>
            <SignUpForm/>
        </AuthContainer>
    );
};
export default Authentication;