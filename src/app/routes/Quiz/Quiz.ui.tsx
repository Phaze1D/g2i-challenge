import * as React from 'react';
import * as s from './Quiz.styles';
import * as classnames from 'classnames';
import { useTranslation } from 'react-i18next';

const UI: React.FC<{
  answer: 'true' | 'false'
  onChange(answer): any
}> = ({
  answer,
  onChange
}) => {
  const {t, ready} = useTranslation('quiz', {useSuspense: false});
  const trueClasses = classnames({'checked': answer === 'true'});
  const falseClasses = classnames({'checked': answer === 'false'});

  const handleClick = React.useCallback(event => {
    const {value} = event.target.dataset;
    onChange(value);
  }, [onChange]);

  if (!ready) return null;

  return (
    <s.Wrapper>
      <s.Title>Category</s.Title>
      <s.Card>
        Question
      </s.Card>
      <s.Label>{t('{{num}} of {{total}}', {num: 1, total: 10})}</s.Label>

      <s.Footer>
        <s.Button
          data-value='true'
          className={trueClasses}
          onClick={handleClick}
        >
          {t('True')}
        </s.Button>

        <s.Button
          data-value='false'
          className={falseClasses}
          onClick={handleClick}
        >
          {t('False')}
        </s.Button>
      </s.Footer>
    </s.Wrapper>
  );
};
export default UI;
