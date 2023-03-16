import GoogleIcon from "Assets/google.svg";
import { GoogleButtonContainer } from "Components/GoogleButton/GoogleButton.styles";

export interface IGoogleButtonProps {
    disabled?: boolean;
    onClick: () => void;
}

const GoogleButton = ({ disabled, onClick }: IGoogleButtonProps) => {
    return (
        <GoogleButtonContainer disabled={disabled} onClick={onClick}>
            <img src={GoogleIcon} alt="Google logo" />
            <span>Continue with Google</span>
        </GoogleButtonContainer>
    );
};

export default GoogleButton;
