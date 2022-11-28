import { Question, WrongAnswers } from '../../features/test/reducer/testsReducer';

export const getWrongAnswers = (arr: Question[]): WrongAnswers[] => {
   const wrongAnswers = [] as WrongAnswers[];

   for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].isAnswerRight === null)
         wrongAnswers.push({
            questionNumber: i + 1,
            wrongAnswer: [`Вы не ответили на этот вопрос`],
         });
      if (arr[i].isAnswerRight === false) {
         const wrongAnswer = [] as string[];
         const currentAnswerOptions = arr[i].answerOptions;
         const currentUserAnswer = arr[i].indexesOfUserAnswers;

         for (let j = 0; j < currentUserAnswer.length; j += 1) {
            wrongAnswer.push(currentAnswerOptions[currentUserAnswer[j]]);
         }
         wrongAnswers.push({ questionNumber: i + 1, wrongAnswer });
      }
   }

   return wrongAnswers;
};
