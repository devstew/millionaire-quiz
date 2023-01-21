import React from 'react';
import './EndGame.css';
import Button from '../Button/Button';
import {commafy} from "../../helpers/commafy";
import {GameStartBanner} from '../../assets/GameStartBanner'

interface EndGameInterface {
    prize: string;
}

const EndGame = (props: EndGameInterface) => {
    const {prize} = props;

    return (
        <div className='millionaire_end'>
            <div className="millionaire_end_banner">
                <GameStartBanner/>
            </div>
            <div className="millionaire_end_earnings">
                <h2>Total score: </h2>
                <h1>{commafy(prize)} earned</h1>
                <Button title='Try again' to={'/'}/>
            </div>
        </div>
    );
};

export default EndGame;
