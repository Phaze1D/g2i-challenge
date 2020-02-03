import * as React from 'react';
import * as s from './App.styles';
import Home from './routes/Home';
import { Route } from 'react-router-dom';

const App: React.FC<{

}> = ({

}) => {

  return (
    <s.Wrapper>
      <Route path='/' component={Home} />
    </s.Wrapper>
  )
}
export default App;
