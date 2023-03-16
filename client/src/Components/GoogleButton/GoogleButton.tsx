import GoogleIcon from "Assets/google.svg";
import { Button } from "Components/GoogleButton/GoogleButton.styles";

export interface IGoogleButtonProps {
    disabled?: boolean;
    onClick: () => void;
}

const GoogleButton = ({ disabled, onClick }: IGoogleButtonProps) => {
    return (
        <Button disabled={disabled} onClick={onClick}>
            <img src={GoogleIcon} alt="Google logo" />
            <span>Continue with Google</span>
        </Button>
    );
};

export default GoogleButton;
