import * as React from 'react';
import * as s from './Home.styles';
import { useTranslation } from 'react-i18next';
import { Difficulties } from 'types';

const Home: React.FC<{

}> = ({

}) => {
  const {t, ready} = useTranslation('home', {useSuspense: false});

  if (!ready) return null;

  return (
    <s.Wrapper>
      <s.Title>{t('Welcome to the Trivia Challenge!')}</s.Title>
      <s.Description>
        {t('You will be presented with {{amount}} True or False questions.', {amount: 10})}
      </s.Description>

      <s.Description>
        {t('Can you score 100%')}
      </s.Description>

      <s.Footer>
        <s.Button to={`/quiz?difficulty=${Difficulties.EASY}`}>
          {t('Easy')}
        </s.Button>

        <s.Button to={`/quiz?difficulty=${Difficulties.MEDIUM}`}>
          {t('Medium')}
        </s.Button>

        <s.Button to={`/quiz?difficulty=${Difficulties.HARD}`}>
          {t('Hard')}
        </s.Button>
      </s.Footer>
    </s.Wrapper>
  );
};
export default Home;
