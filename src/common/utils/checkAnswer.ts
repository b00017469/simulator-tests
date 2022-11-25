import { Answers } from '../../features/test/testsReducer';

export const checkAnswer = (rightAnswers: Answers, usersAnswers: Answers): boolean => {
   return JSON.stringify(rightAnswers) === JSON.stringify(usersAnswers);
};
