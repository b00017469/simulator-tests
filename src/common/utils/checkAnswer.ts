import { Answers } from '../../features/test/testsReducer';

export const checkAnswer = (rightAnswers: Answers, usersUnswers: Answers): boolean => {
   return JSON.stringify(rightAnswers) === JSON.stringify(usersUnswers);

   // if (wrong.length === right.length) {
   //    for (let i = 0; right.length > i; i += 1) {
   //       if (!wrong.includes(right[i])) return false;
   //    }
   //
   //    return true;
   // }
   //
   // return false;
};
