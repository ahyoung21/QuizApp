import React, { useEffect, useState } from 'react';
import { useSelector } from '../../store/store';
import { IncorrectAnswerNoteBox } from './style';

const IncorrectAnswerNote = () => {
  const quizData = useSelector((state) => state.quiz.data);
  const incorrectAnswerData = useSelector((state) => state.quiz.incorrectAnswerValue);

  const [correctAnswerData, setCorrectAnswerData] = useState<string[]>([]);

  useEffect(() => {
    let correctAnswerArr = new Array();
    quizData.forEach((quiz) => {
      incorrectAnswerData.forEach((answer) => {
        if (quiz.question === answer.question) {
          correctAnswerArr.push(quiz.correct_answer);
        }
      });
    });
    setCorrectAnswerData(correctAnswerArr);
  }, []);

  return (
    <>
      <h3>오답노트</h3>
      <IncorrectAnswerNoteBox>
        <table>
          <colgroup>
            <col style={{ width: 'auto' }} />
            <col style={{ width: '12rem' }} />
            <col style={{ width: '12rem' }} />
          </colgroup>
          <thead>
            <tr>
              <th scope="th">문제</th>
              <th scope="th">정답</th>
              <th scope="th">내가 고른 답</th>
            </tr>
          </thead>
          <tbody>
            {incorrectAnswerData.map((answer, idx) => {
              return (
                <tr key={idx}>
                  <td>
                    <pre
                      dangerouslySetInnerHTML={{
                        __html: answer.question,
                      }}
                    />
                  </td>
                  <td>
                    <pre
                      dangerouslySetInnerHTML={{
                        __html: correctAnswerData[idx],
                      }}
                    />
                  </td>
                  <td>
                    <pre
                      dangerouslySetInnerHTML={{
                        __html: answer.answer,
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </IncorrectAnswerNoteBox>
    </>
  );
};

export default IncorrectAnswerNote;
