import {
    SeparatorContainer,
    SeparatorLineLeft,
    SeparatorLineRight,
} from "./Separator.styles";

export interface ISeparatorProps {}

const Separator = (props: ISeparatorProps) => {
    return (
        <SeparatorContainer>
            <SeparatorLineLeft />
            <p>OR</p>
            <SeparatorLineRight />
        </SeparatorContainer>
    );
};

export default Separator;
