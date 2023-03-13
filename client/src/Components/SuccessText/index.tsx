export interface ISuccessTextProps {
    success: string;
}

const SuccessText = ({ success }: ISuccessTextProps) => {
    if (success === "") return null;

    return <>{success}</>;
};

export default SuccessText;
