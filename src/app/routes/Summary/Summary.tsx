import * as React from 'react';
import UI from './Summary.ui';
import get from 'lodash.get';
import map from 'lodash.map';
import { connect } from 'react-redux';
import { QuestionType } from 'types';


type Props =
  ReturnType<typeof mapStateToProps>;

const Summary: React.FC<
  Props
> = ({
  questions
}) => {
  const score = questions.reduce((prevS, question) => {
    const correct = question.correct_answer === question.user_answer;
    return correct ? prevS + 1 : prevS;
  } , 0);


  return (
    <UI
      score={score}
      questions={questions}
    />
  );
};

const mapStateToProps = state => ({
  questions: map(get(state, 'models.Question'), q => q) as QuestionType[]
});

export default connect(
  mapStateToProps
)(React.memo(Summary));
