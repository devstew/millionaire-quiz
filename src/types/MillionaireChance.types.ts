export interface QuestionInterface {
    question: string;
    prize: number;
    answers: {
        answer: object[];
        correct: boolean;
    }[];
}
