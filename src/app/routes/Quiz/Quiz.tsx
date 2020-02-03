import * as React from 'react';
import UI from './Quiz.ui';
import { RouteComponentProps } from 'react-router-dom';

const Quiz: React.FC<{

} & RouteComponentProps> = ({

}) => {
  const [answer, setAnswer] = React.useState(null);


  const handleChange = React.useCallback((value) => {
    setAnswer(value);
  }, []);

  return (
    <UI
      answer={answer}
      onChange={handleChange}
    />
  );
};
export default React.memo(Quiz);
