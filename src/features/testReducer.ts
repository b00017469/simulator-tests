const initialState = {
   questionsForBackend: [
      {
         id: '1',
         questionText: 'Вопрос 1?',
         answerOptions: ['ответ 1', 'ответ 2', 'ответ 3', 'ответ 4'],
         rightIndexesOfAnswers: [1],
         indexesOfUserAnswers: [] as number[],
         isAnswer: false,
         isAnswerCorrect: null as boolean | null,
      },
      {
         id: '2',
         questionText: 'Вопрос 2?',
         answerOptions: ['ответ 1-2', 'ответ 2', 'ответ 3', 'ответ 4'],
         rightIndexesOfAnswers: [2],
         indexesOfUserAnswers: [] as number[],
         isAnswer: false,
         isAnswerCorrect: null as boolean | null,
      },
      {
         id: '3',
         questionText: 'Вопрос 3?',
         answerOptions: ['ответ 1', 'ответ 2', 'ответ 3', 'ответ 4'],
         rightIndexesOfAnswers: [3],
         indexesOfUserAnswers: [] as number[],
         isAnswer: false,
         isAnswerCorrect: null as boolean | null,
      },
      {
         id: '4',
         questionText: 'Вопрос 4?',
         answerOptions: ['ответ 1', 'ответ 2', 'ответ 3', 'ответ 4'],
         rightIndexesOfAnswers: [4],
         indexesOfUserAnswers: [] as number[],
         isAnswer: false,
         isAnswerCorrect: null as boolean | null,
      },
      {
         id: '5',
         questionText: 'Вопрос 5?',
         answerOptions: ['ответ 1', 'ответ 2', 'ответ 3', 'ответ 4'],
         rightIndexesOfAnswers: [0, 2, 3],
         indexesOfUserAnswers: [] as number[],
         isAnswer: false,
         isAnswerCorrect: null as boolean | null,
      },
   ],
};

export const testReducer = (
   state: InitialTestType = initialState,
   action: any,
): InitialTestType => {
   switch (action.type) {
      case 'CASE':
         return state;
      default:
         return state;
   }
};

type InitialTestType = typeof initialState;
