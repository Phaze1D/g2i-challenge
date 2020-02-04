import { AnswerParams } from 'types';
import { UPSERT } from '../types';


export const setAnswer = (params: AnswerParams) =>  {

  return dispatch => {
    return dispatch({
      type: UPSERT,
      payload: {
        model: {
          type: 'Question',
          id: params.questionId,
          data: {
            user_answer: params.user_answer
          }
        }
      }
    })
  }
};


