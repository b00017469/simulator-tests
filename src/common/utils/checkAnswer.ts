export const checkAnswer = (right: number[], wrong: number[]): boolean => {
   if (wrong.length === right.length) {
      for (let i = 0; right.length > i; i += 1) {
         if (!wrong.includes(right[i])) return false;
      }

      return true;
   }

   return false;
};
