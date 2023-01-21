import {QuestionInterface} from "./MillionaireChance.types";

export interface QuizType {
    questions: QuestionInterface[];
    setTimeOut: Function;
    questionNumber: number;
    setQuestionNumber: Function;
}
