import { WrongAnswers } from '../../features/test/testReducer';

export const getWrongAnswers = (arr: any): WrongAnswers[] => {
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

         // eslint-disable-next-line no-restricted-syntax
         for (const key in currentUserAnswer) {
            if (currentUserAnswer[key]) wrongAnswer.push(currentAnswerOptions[key]);
         }
         wrongAnswers.push({ questionNumber: i + 1, wrongAnswer });
      }
   }

   return wrongAnswers;
};
