import React from 'react';
import Button from '../Button/Button';
import {GameStartBanner} from '../../assets/GameStartBanner';
import './GameStart.css'

const GameStart = () => {
   return(
       <div className='gamestart'>
           <GameStartBanner />
           <div className='gamestart_content'>
               <h1 className='gamestart_text'>Who wants to be <br/> a millionaire?</h1>
               <span className='its_invisible_not_oled_burnout'>(developer edition)</span>
               <Button title='Start' to={'/millionaire-chance'} additionalStyling='gamestart_button'/>
           </div>
       </div>
   )
}

export default GameStart;
