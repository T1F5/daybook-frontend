import { ComponentPropsWithoutRef } from "react";
import styled from "@emotion/styled";
import { colors } from "../../theme";

export type ButtonType = "default"

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
    children: React.ReactNode | string;
    buttonType?: ButtonType;
    disabled?: boolean;
}

const Button = ({
    children,
    buttonType = "default",
    ...rest
}: ButtonProps) => {
    const StyledButton = ButtonObj[buttonType as keyof typeof ButtonObj];
    const Render = (
        <StyledButton onClick={rest.onClick} {...rest}>
            {children}
        </StyledButton>
    );

    return Render;
};

export default Button;

const DefaultButton = styled.button`
    width: 100%;
    background: ${colors.primaryDark};
    height: 56px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-family: 'Nanum Myeongjo', serif;
`;

const ButtonObj = {
    default: DefaultButton,
};