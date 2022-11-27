export const checkAnswer = (rightAnswers: number[], usersAnswers: number[]): boolean => {
   return JSON.stringify(rightAnswers.sort()) === JSON.stringify(usersAnswers.sort());
};
