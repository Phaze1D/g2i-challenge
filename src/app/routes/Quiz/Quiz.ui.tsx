import * as React from 'react';
import * as s from './Quiz.styles';
import { useTranslation } from 'react-i18next';
import { QuestionType, Answers } from 'types';

const UI: React.FC<{
  loading: boolean
  question: QuestionType
  currentIndex: number
  onAnswered(answer): any
}> = ({
  loading,
  question = {},
  currentIndex,
  onAnswered
}) => {
  const {t, ready} = useTranslation('quiz', {useSuspense: false});
  const showLoading = !ready || loading;

  const handleClick = React.useCallback(event => {
    const {value} = event.target.dataset;
    onAnswered(value);
  }, [onAnswered]);

  if (!ready) return null;

  return (
    <s.Wrapper>
      {showLoading ? t('Loading') :
        <>
          <s.Title>{question.category}</s.Title>
          <s.Card dangerouslySetInnerHTML={{__html: question.question}} />
          <s.Label>{t('{{num}} of {{total}}', {num: currentIndex + 1, total: 10})}</s.Label>

          <s.Footer>
            <s.Button
              data-value={Answers.TRUE}
              onClick={handleClick}
            >
              {t('True')}
            </s.Button>

            <s.Button
              data-value={Answers.FALSE}
              onClick={handleClick}
            >
              {t('False')}
            </s.Button>
          </s.Footer>
        </>
      }
    </s.Wrapper>
  );
};
export default UI;
