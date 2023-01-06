import styled from 'styled-components';

export const ButtonBox = styled.div`
  margin-top: 2rem;
  text-align: center;

  button {
    display: inline-block;
    padding: 2rem 5rem 2rem 3rem;
    font-weight: 400;
    font-size: 2rem;
    color: #fff;
    cursor: pointer;
    border: 1px solid #00c896;
    background-color: #00c896;
    border-radius: 2rem;
    background-image: url('../images/ico_arrow.png');
    background-repeat: no-repeat;
    background-size: 10% auto;
    background-position: 85% 50%;
    animation: arrow-motion 1s ease-in-out infinite;
  }

  @keyframes arrow-motion {
    0% {
      background-position: 82%;
    }
    100% {
      background-position: 88%;
    }
  }
`;
