import styled from 'styled-components';

export const IncorrectAnswerNoteBox = styled.div`
  text-align: center;

  table {
    table-layout: fixed;
    width: 100%;
    margin-top: 3rem;

    thead {
      border-top: 3px solid #000;
      border-bottom: 1px solid #b7b7c8;

      th {
        height: 7rem;
        font-weight: 400;
        font-size: 1.8rem;
        vertical-align: middle;
      }
    }

    tbody {
      tr {
        border-bottom: 1px solid #e7e7f0;

        td {
          padding: 2rem;
          font-weight: 400;
          font-size: 1.6rem;
          color: #3b3b4d;
          line-height: 1.3;
        }
      }
    }
  }

  button {
    display: inline-block;
    padding: 1rem 2rem;
    font-size: 2rem;
    color: #fff;
    background-color: #00c896;
    border-radius: 1.2rem;
  }
`;
