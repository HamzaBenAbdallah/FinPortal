import { Button } from "./SubmitButton.styles";

export interface ISubmitButtonProps {
    children: React.ReactNode;
}

const SubmitButton = ({ children }: ISubmitButtonProps) => {
    return <Button>{children}</Button>;
};

export default SubmitButton;
