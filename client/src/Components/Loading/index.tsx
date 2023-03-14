export interface ILoadingProps {
    children?: React.ReactNode;
}

const Loading = ({ children }: ILoadingProps) => {
    return <div>{children}</div>;
};

export default Loading;
