const initialState = {
   questionsForBackend: [
      {
         id: '1',
         questionText: 'Вопрос 1?',
         answerOptions: ['ответ 1-1', 'ответ 1-2', 'ответ 1-3', 'ответ 1-4'],
         rightIndexesOfAnswers: [1],
         indexesOfUserAnswers: [] as number[],
         isAnswer: false,
         isAnswerRight: null as boolean | null,
      },
      {
         id: '2',
         questionText: 'Вопрос 2?',
         answerOptions: ['ответ 2-1', 'ответ 2-2', 'ответ 2-3', 'ответ 2-4'],
         rightIndexesOfAnswers: [2],
         indexesOfUserAnswers: [] as number[],
         isAnswer: false,
         isAnswerRight: null as boolean | null,
      },
      {
         id: '3',
         questionText: 'Вопрос 3?',
         answerOptions: ['ответ 3-1', 'ответ 3-2', 'ответ 3-3', 'ответ 3-4'],
         rightIndexesOfAnswers: [3],
         indexesOfUserAnswers: [] as number[],
         isAnswer: false,
         isAnswerRight: null as boolean | null,
      },
      {
         id: '4',
         questionText: 'Вопрос 4?',
         answerOptions: ['ответ 4-1', 'ответ 4-2', 'ответ 4-3', 'ответ 4-4'],
         rightIndexesOfAnswers: [4],
         indexesOfUserAnswers: [] as number[],
         isAnswer: false,
         isAnswerRight: null as boolean | null,
      },
      {
         id: '5',
         questionText: 'Вопрос 5?',
         answerOptions: ['ответ 5-1', 'ответ 5-2', 'ответ 5-3', 'ответ 5-4'],
         rightIndexesOfAnswers: [0, 2, 3],
         indexesOfUserAnswers: [] as number[],
         isAnswer: false,
         isAnswerRight: null as boolean | null,
      },
   ],
};

export const testReducer = (
   state: InitialTestType = initialState,
   action: TestsReducerActions,
): InitialTestType => {
   switch (action.type) {
      case 'TESTS/SET-ANSWERS-USER':
         return {
            ...state,
            questionsForBackend: state.questionsForBackend.map(question =>
               question.id === action.payload.id
                  ? {
                       ...question,
                       indexesOfUserAnswers: [
                          ...question.indexesOfUserAnswers,
                          action.payload.indexAnswer,
                       ],
                    }
                  : question,
            ),
         };
      case 'TESTS/SET-CHECKED-ANSWER': {
         return {
            ...state,
            questionsForBackend: state.questionsForBackend.map(q =>
               q.id === action.payload.id
                  ? { ...q, isAnswerRight: action.payload.isAnswerRight }
                  : q,
            ),
         };
      }
      case 'TESTS/SET-IS-ANSWER': {
         return {
            ...state,
            questionsForBackend: state.questionsForBackend.map(q =>
               q.id === action.payload.id ? { ...q, isAnswer: action.payload.isAnswer } : q,
            ),
         };
      }
      default:
         return state;
   }
};

export const setIndexesOfUserAnswers = (id: string, indexAnswer: number) =>
   ({
      type: 'TESTS/SET-ANSWERS-USER',
      payload: { id, indexAnswer },
   } as const);
export const setCheckedAnswer = (id: string, isAnswerRight: boolean) =>
   ({
      type: 'TESTS/SET-CHECKED-ANSWER',
      payload: { id, isAnswerRight },
   } as const);
export const setIsAnswer = (id: string, isAnswer: boolean) =>
   ({
      type: 'TESTS/SET-IS-ANSWER',
      payload: { id, isAnswer },
   } as const);

type InitialTestType = typeof initialState;

export type TestsReducerActions =
   | ReturnType<typeof setIndexesOfUserAnswers>
   | ReturnType<typeof setCheckedAnswer>
   | ReturnType<typeof setIsAnswer>;
