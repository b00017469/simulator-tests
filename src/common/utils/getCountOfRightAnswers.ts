import { Question } from '../../features/test/reducer/testsReducer';

export const getCountOfRightAnswers = (questions: Question[]): number => {
   let count = 0;

   for (let i = 0; i < questions.length; i += 1) {
      if (questions[i].isAnswerRight) count += 1;
   }

   return count;
};
