import { ButtonStyled } from "./ButtonStyles";

type TButtonProps = {
  /**
   * onClick action
   */
  onClick: () => void;
  /**
   * title for the Button
   */
  title: string;
};
export const Button: React.FC<TButtonProps> = ({ onClick, title }) => {
  return <ButtonStyled onClick={onClick}>{title}</ButtonStyled>;
};
