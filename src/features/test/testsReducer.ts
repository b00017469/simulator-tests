import { getCountOfRightAnswers } from '../../common/utils/getCountOfRightAnswers';
import { getWrongAnswers } from '../../common/utils/getWrongAnswers';

const initialState = {
   way: '',
   questions: [] as Question[],
   results: {
      countOfRightAnswers: 0,
      wrongAnswers: [] as WrongAnswer[],
   },
};

export const testsReducer = (
   state: InitialTestType = initialState,
   action: TestsReducerActions,
): InitialTestType => {
   switch (action.type) {
      case 'TESTS/GET-QUESTIONS': {
         return { ...state, way: action.way, questions: action.questions };
      }
      case 'TESTS/SET-ANSWERS-USER':
         return {
            ...state,
            questions: state.questions.map(question =>
               question.id === action.payload.id
                  ? {
                       ...question,
                       indexesOfUserAnswers: {
                          ...question.indexesOfUserAnswers,
                          ...action.payload.answerChanged,
                       },
                    }
                  : question,
            ),
         };
      case 'TESTS/SET-CHECKED-ANSWER': {
         return {
            ...state,
            questions: state.questions.map(q =>
               q.id === action.payload.id
                  ? { ...q, isAnswerRight: action.payload.isAnswerRight }
                  : q,
            ),
         };
      }
      case 'TESTS/SET-IS-ANSWER': {
         return {
            ...state,
            questions: state.questions.map(q =>
               q.id === action.payload.id ? { ...q, isAnswer: action.payload.isAnswer } : q,
            ),
         };
      }
      case 'TESTS/GET-RESULTS': {
         return {
            ...state,
            results: {
               countOfRightAnswers: getCountOfRightAnswers(state.questions),
               wrongAnswers: getWrongAnswers(state.questions),
            },
         };
      }
      case 'TESTS/RESET-RESULTS': {
         return initialState;
      }
      default:
         return state;
   }
};

export const getQuestions = (way: string, questions: Question[]) =>
   ({
      type: 'TESTS/GET-QUESTIONS',
      way,
      questions,
   } as const);
export const setIndexesOfUserAnswers = (id: string, answerChanged: any) =>
   ({
      type: 'TESTS/SET-ANSWERS-USER',
      payload: { id, answerChanged },
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
export const getResults = () =>
   ({
      type: 'TESTS/GET-RESULTS',
   } as const);
export const resetResults = () =>
   ({
      type: 'TESTS/RESET-RESULTS',
   } as const);

type InitialTestType = typeof initialState;

export type TestsReducerActions =
   | ReturnType<typeof setIndexesOfUserAnswers>
   | ReturnType<typeof setCheckedAnswer>
   | ReturnType<typeof setIsAnswer>
   | ReturnType<typeof getQuestions>
   | ReturnType<typeof resetResults>
   | ReturnType<typeof getResults>;

export type Answers = {
   0: boolean;
   1: boolean;
   2: boolean;
   3: boolean;
};

export type Question = {
   id: string;
   questionText: string;
   answerOptions: string[];
   rightIndexesOfAnswers: Answers;
   indexesOfUserAnswers: Answers;
   isAnswer: boolean;
   isAnswerRight: boolean | null;
};

export type WrongAnswer = { questionNumber: number; wrongAnswer: string[] };
