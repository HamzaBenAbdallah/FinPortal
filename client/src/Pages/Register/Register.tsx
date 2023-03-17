import { useRegister } from "./useRegister";
import IPageProps from "Interfaces/page";
import { Providers } from "Config/firebase";
import GoogleButton from "Components/GoogleButton";
import Separator from "Components/Separator";
import FormInput from "Components/FormInput";
import SubmitButton from "Components/SubmitButton";
import {
    Wrapper,
    Container,
    Title,
    FormContainer,
    Prompt,
    Login,
} from "./Register.styles";

const Register = (props: IPageProps) => {
    const { authenticating, error, SignInWithSocialMedia, NavigateToLogin } =
        useRegister();

    return (
        <Wrapper>
            <Container>
                <Title>Sign up for FinPortal</Title>
                <GoogleButton
                    disabled={authenticating}
                    onClick={() => SignInWithSocialMedia(Providers.google)}
                />
                <Separator />
                <FormContainer>
                    <FormInput
                        label="Email"
                        type="email"
                        placeholder="your@email.com"
                        error="Required"
                    />
                    <FormInput
                        label="Password"
                        type="password"
                        placeholder="enter your password"
                        error="Required"
                    />
                    <SubmitButton>Complete sign up</SubmitButton>
                </FormContainer>
                <Prompt>
                    Already have an account?{" "}
                    <Login onClick={NavigateToLogin}>Sign in</Login>
                </Prompt>
            </Container>
        </Wrapper>
    );
};

export default Register;
