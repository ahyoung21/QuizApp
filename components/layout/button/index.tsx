import { ButtonBox } from './style';

type ChildProps = {
  text: string;
  goNextStep?: () => void;
};

const Button = ({ text, goNextStep }: ChildProps) => {
  return (
    <>
      <ButtonBox>
        <button onClick={goNextStep}>{text}</button>
      </ButtonBox>
    </>
  );
};
export default Button;
