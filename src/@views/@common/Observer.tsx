import styled from '@emotion/styled';
import { Dispatch, FC, SetStateAction } from 'react';

export interface ObserverProps {
  target: Dispatch<SetStateAction<Element | null>>;
}

interface Props {
  observerProps: ObserverProps;
}

const Observer: FC<Props> = ({ observerProps }) => {
  const { target } = observerProps;

  return <Container ref={target} className="test" />;
};

export default Observer;

const Container = styled.div`
  width: 1px;
  height: 1px;
`;
