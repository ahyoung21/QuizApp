import styled from 'styled-components';

export const QuizBox = styled.div`
  ul {
    li {
      & + li {
        margin-top: 1.6rem;
      }
    }
  }

  p {
    margin-top: 2rem;
    font-weight: 400;
    font-size: 1.6rem;
    color: rgb(178, 1, 16);
  }
`;

export const SkeletonBox = styled.div`
  dl {
    dt {
      margin-bottom: 2rem;
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 1.3;
    }

    dd {
      display: block;
      margin-top: 1.6rem;
      padding: 2rem;
      font-weight: 400;
      font-size: 2rem;
      cursor: pointer;
      border: 1px solid #cfcfda;
    }
  }
`;
