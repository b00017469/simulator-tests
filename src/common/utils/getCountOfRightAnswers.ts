export const getCountOfRightAnswers = (arr: any): number => {
   let count = 0;

   for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].isAnswerRight) count += 1;
   }

   return count;
};
