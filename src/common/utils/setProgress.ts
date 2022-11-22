const degreesInOnePercentOfCircle = 1.8;

export const setProgress = (percent: number): void => {
   const degrees = `${degreesInOnePercentOfCircle * percent}deg`;

   document.documentElement.style.setProperty('--fill-progress', degrees);
};
