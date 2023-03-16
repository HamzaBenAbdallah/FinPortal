import { isErrored } from "stream";
import { FormInputContainer } from "./FormInput.styles";

export interface IFormInputProps {
    label: string;
    type?: string;
    placeholder: string;
    isErrored?: boolean;
    error: string;
}

const FormInput = ({
    label,
    type = "text",
    placeholder,
    isErrored = false,
    error,
}: IFormInputProps) => {
    return (
        <FormInputContainer>
            <label>{label}</label>
            <input
                className={isErrored ? "red" : ""}
                type={type}
                placeholder={placeholder}
            />
            <div className={isErrored ? "visible" : ""}>{error}</div>
        </FormInputContainer>
    );
};

export default FormInput;
