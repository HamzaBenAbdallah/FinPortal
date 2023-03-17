import { useLogin } from "./useLogin";
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
    Signup,
    Reset,
} from "./Login.styles";

const Login = (props: IPageProps) => {
    const { authenticating, error, SignInWithSocialMedia } = useLogin();

    return (
        <Wrapper>
            <Container>
                <Title>Sign in to FinPortal</Title>
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
                    <SubmitButton>Sign in</SubmitButton>
                </FormContainer>
                <Prompt>
                    Need an account? <Signup>Sign up</Signup>
                </Prompt>
                <Prompt>
                    Forgot your password? <Reset>Reset it</Reset>
                </Prompt>
            </Container>
        </Wrapper>
    );
};

export default Login;
