import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Quiz.css';
import {QuizType} from '../../../types/Quiz.type'
import {QuestionInterface} from "../../../types/MillionaireChance.types";
import {Context} from "../../../context/context";

const Quiz: React.FC<QuizType> = (
    {
        questions,
        setTimeOut,
        setQuestionNumber,
        questionNumber
    }) => {
    const {prize, setPrize} = React.useContext(Context);
    let navigate = useNavigate();
    const [question, setQuestion] = React.useState<QuestionInterface>();
    const [selectedAnswer, setSelectedAnswer] = React.useState<any>(null);
    const [className, setClassName] = React.useState<string>('quiz_answer');
    const [stop, setStop] = React.useState<boolean>(false);

    React.useEffect(() => {
        setQuestion(questions[questionNumber - 1]);
    }, [questions, questionNumber]);

    React.useEffect(() => {
        if (stop || questionNumber > 12) {
            navigate('/millionaire-end')
        }
    }, [stop, questionNumber])

    const handleSetPrize = (curPrize: number) => {
        setPrize('$ ' + curPrize);
    }

    const delay = (duration: number, callback: Function) => {
        setTimeout(() => {
            callback();
        }, duration)
    }

    const handleClickAnswer = (answer: any, prize: number) => {
        setSelectedAnswer(answer);
        setClassName('millionaire_chance_control_answers_list_item millionaire_chance_control_answers_list_item_selected');
        delay(3000, () => {
            setClassName(answer.correct ? 'millionaire_chance_control_answers_list_item correct' : 'millionaire_chance_control_answers_list_item wrong');
        });
        delay(6000, () => {
            if (answer.correct) {
                handleSetPrize(prize);
                setQuestionNumber((prev: number) => prev + 1);
                setSelectedAnswer(null);
            }
            else {
                setStop(true);
            }
        })
    }

    return (
        <div className='millionaire_chance_controls'>
            <div className='millionaire_chance_control_question'>
                <h1>{question?.question}</h1>
            </div>
            <div className="millionaire_chance_control_answers">
                <ul className="millionaire_chance_control_answers_list">
                    {question?.answers.map((answer, index) => {
                        return (
                            <li
                                key={`${answer}${index}`}
                                className={selectedAnswer === answer ? className : "millionaire_chance_control_answers_list_item"}
                                onClick={() => handleClickAnswer(answer, question?.prize)}
                            >
                                <span>{`${answer.answer}`}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Quiz;
