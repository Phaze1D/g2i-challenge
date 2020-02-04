import { getQuiz } from 'api';
import { QuizParams } from 'types';
import { AxiosError, AxiosResponse } from 'axios';
import { REPLACE_MANY, REPLACE, UPSERT } from '../types';


export const get = (params: QuizParams) =>  {

  return dispatch => {
    dispatch(createRequestAction(params));

    return getQuiz(params)
      .then(res => dispatch(handleSuccess(res)))
      .catch(err => dispatch(handleError(err)))
      .finally(() => dispatch(updateRequestAction()));
  }
};

const createRequestAction = (params) => {
  return {
    type: REPLACE,
    payload: {
      model: {
        type: 'Request',
        id: 'getQuiz',
        data: {
          params,
          name: 'getQuiz',
          loading: true
        }
      }
    }
  }
}

const updateRequestAction = () => {
  return {
    type: UPSERT,
    payload: {
      model: {
        type: 'Request',
        id: 'getQuiz',
        data: {
          loading: false
        }
      }
    }
  }
}

const handleSuccess = (res: AxiosResponse) => {
  const {data} = res;
  const {results} = data;

  const models = results.map((question, i)=> ({
    type: 'Question',
    id: `${i}`,
    data: {...question, user_answer: null}
  }));

  models.push({
    type: 'Quiz',
    id: '0',
    data: {
      questions: results
    }
  });

  return {
    type: REPLACE_MANY,
    payload: {models}
  };
};


const handleError = (res: AxiosError) => {
  return {
    type: REPLACE,
    payload: {
      model: {
        type: 'Error',
        payload: res.response.data
      }
    }
  };
};
