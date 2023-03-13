export interface IErrorTextProps {
    error: string;
}

const ErrorText = ({ error }: IErrorTextProps) => {
    if (error === "") return null;

    return <>{error}</>;
};

export default ErrorText;
