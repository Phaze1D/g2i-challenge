import * as React from 'react';
import * as s from './App.styles';
import Home from './routes/Home';
import Quiz from './routes/Quiz';
import { Route, Switch } from 'react-router-dom';

const App: React.FC<{

}> = ({

}) => {

  return (
    <s.Wrapper>
      <Switch>
        <Route path='/quiz' component={Quiz} />
        <Route path='/' component={Home} />
      </Switch>
    </s.Wrapper>
  )
}
export default App;
