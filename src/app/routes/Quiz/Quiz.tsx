import * as React from 'react';
import * as quizActions from 'store/actions/models/quiz';
import * as questionActions from 'store/actions/models/question';
import * as qs from 'query-string';
import get from 'lodash.get';
import UI from './Quiz.ui';
import { RouteComponentProps } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Difficulties } from 'types';


const QUIZ_SIZE = 10;

type Props =
  ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps> &
  RouteComponentProps;

const Quiz: React.FC<
  Props
> = ({
  getQuiz,
  quiz,
  setAnswer,
  request,
  location,
  history
}) => {
  const [currentIndex, setQuestionIndex] = React.useState(0);
  const loading = get(request, 'loading', false);


  React.useEffect(() => {
    const search = qs.parse(location.search);

    getQuiz({
      amount: QUIZ_SIZE,
      difficulty: search.difficulty as Difficulties || Difficulties.HARD,
      type: 'boolean'
    });
  }, [location]);


  const handleAnswered = React.useCallback((value) => {
    setAnswer({
      questionId: `${currentIndex}`,
      user_answer: value
    });

    if (currentIndex + 1 < QUIZ_SIZE)
      return setQuestionIndex(prev => prev + 1);

    history.push('/summary')
  }, [currentIndex]);

  return (
    <UI
      question={get(quiz, `questions[${currentIndex}]`)}
      loading={loading}
      currentIndex={currentIndex}
      onAnswered={handleAnswered}
    />
  );
};

const mapStateToProps = state => ({
  quiz: get(state, 'models.Quiz.0'),
  request: get(state, 'models.Request.getQuiz')
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getQuiz: quizActions.get,
  setAnswer: questionActions.setAnswer
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Quiz));
