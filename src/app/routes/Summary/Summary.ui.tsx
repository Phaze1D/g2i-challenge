import * as React from 'react';
import * as s from './Summary.styles';
import { useTranslation } from 'react-i18next';
import { QuestionType } from 'types';
import { Redirect } from 'react-router-dom';
import { TFunction } from 'i18next';

const UI: React.FC<{
  score: number
  questions: QuestionType[]
}> = ({
  score,
  questions
}) => {
  const {t, ready} = useTranslation('summary', {useSuspense: false});
  const hasQuestions = questions.length > 0;

  if (!ready) return null;

  return (
    <s.Wrapper>
      {!hasQuestions && <Redirect to='/' />}

      <s.Title>
        {t('You scored')}
        <br />
        {score} / 10
      </s.Title>

      <s.List>
        {questions.map(q => <Result key={q.id} question={q} t={t} />)}
      </s.List>

      <s.Button to='/'>
        {t('Play Again')}
      </s.Button>
    </s.Wrapper>
  );
};
export default UI;

const Result: React.FC<{
  question: QuestionType
  t: TFunction
}> = ({
  question,
  t
}) => {

  return (
    <s.Item>
      <div dangerouslySetInnerHTML={{__html: question.question}} />

      <s.ItemInfo>
        {t('Correct Answer is - {{answer}}', {answer: question.correct_answer})}
      </s.ItemInfo>

      <s.ItemInfo>
        {t('Your Answer was - {{answer}}', {answer: question.user_answer})}
      </s.ItemInfo>
    </s.Item>
  );
}
