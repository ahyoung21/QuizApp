import styled from 'styled-components';

export const CheckedTypeRadioBox = styled.div`
  label {
    span {
      display: block;
      padding: 2rem;
      font-weight: 400;
      font-size: 2rem;
      cursor: pointer;
      border: 1px solid #cfcfda;
    }

    input {
      position: absolute;
      clip: rect(0 0 0 0);
      width: 1px;
      height: 1px;
      margin: -1px;
      overflow: hidden;

      &:checked {
        + span {
          border-color: #00c896;
          background-color: #00c896;
          color: #fff;
        }
      }
    }
  }
`;
