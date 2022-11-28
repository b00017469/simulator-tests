import { backendQuestions } from '../../api/dataBase/backend';
import { frontendQuestions } from '../../api/dataBase/frontend';
import { Question } from '../../features/test/reducer/testsReducer';
import { WAY } from '../enum/wayEnum';

export const chooseWay = (way: string): Question[] | undefined => {
   if (way === WAY.BACK) return backendQuestions;
   if (way === WAY.FRONT) return frontendQuestions;
};
