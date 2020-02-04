import axios from 'axios';
import { QuizParams } from 'types';


export const getQuiz = (params: QuizParams) => {
  return axios.get('https://opentdb.com/api.php', {params});
}
