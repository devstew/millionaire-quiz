import React from 'react';
import './MillionaireChance.css';
import Quiz from './Quiz/Quiz';
import {PrizeSetType} from '../../types/prizeSet.type';
import {getQuestions} from '../../api/questionsApi';
import {getPrizeSet} from '../../api/prizeSet';


const MillionaireChance = () => {
    const [questions, setQuestionsList] = React.useState<any>([]);
    const [questionNumber, setQuestionNumber] = React.useState<number>(1);
    const [prizeSet, setPrizeSet] = React.useState<Array<PrizeSetType>>([]);
    const [prizeEarned, setPrizeEarned] = React.useState<PrizeSetType["amount"]>('$ 0');

    React.useEffect(() => {
        setQuestionsList(getQuestions);
    }, []);

    React.useMemo(()=> {
        setPrizeSet(getPrizeSet);
    }, [])

    React.useEffect(() => {
        questionNumber > 1 &&
        // @ts-ignore
        setPrizeEarned(prizeSet.find((prize: PrizeSetType) => prize.id === questionNumber - 1).amount);
    }, [questionNumber, prizeSet]);

    const renderPrizeGrade = () => {
        return (
            <ul className='millionaire_chance_prize_list'>
                {prizeSet.map((prizeValue: PrizeSetType, index: number) => (
                    <li key={`${prizeValue} ${index}`} className={questionNumber === prizeValue.id ?
                        'millionaire_chance_prize_list_item prize_item_disabled' :
                        'millionaire_chance_prize_list_item'
                    }>
                        <span>{prizeValue.amount}</span>
                    </li>
                ))}
            </ul>
        )
    };

    const renderAnswerControls = () => {
        return (
            <Quiz
                questions={questions}
                setTimeOut={setTimeout}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
            />
        )
    }

    return (
        <div className='millionaire_chance'>
            <div>
                {renderAnswerControls()}
            </div>
            <div className='millionaire_chance_prize'>
                {renderPrizeGrade()}
            </div>
        </div>
    );
};

export default MillionaireChance;

