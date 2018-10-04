import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      guesses: [],
      feedback: 'Make your guess',
      modalDisplayed: false,
      targetNumber: this.generateTargetNumber(), 
      gameOver: false
    };

    this.toggleModalDisplay = this.toggleModalDisplay.bind(this);
    this.updateGuessState = this.updateGuessState.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  // Updates modal display state
  toggleModalDisplay() {
    console.log('toggle modal called');

    const invertedModalState = !this.state.modalDisplayed;

    this.setState({ modalDisplayed: invertedModalState });
  }

  // Updates guess array with latest guess
  updateGuessState(guess) {
    console.log('update guess state called ', guess);
    // get a new guess
    // merge guess into a new array
    const newGuessArray = [...this.state.guesses, guess];

    // that we use this.setState to update state with
    this.setState({ guesses: newGuessArray,
       feedback: this.updateUserFeedbackMessageState(guess) });
  }

  // Update user feedback message
  updateUserFeedbackMessageState(guess) {
    if(guess === this.state.targetNumber){
      this.setState({gameOver: true});
      return "Correct";
    }
    else if(Math.abs(guess-this.state.targetNumber) < 20){
      return "Warm";}
    else{return "Cold";}
  }

  // Updates state for new game
  newGame(){
    this.setState({
      gameOver: false,
      guesses: [],
      feedback: 'Make your guess',
      targetNumber: this.generateTargetNumber()
    })
  }

  // Generate target number
  generateTargetNumber(){
    return Math.floor(Math.random()*100+1);
  }

  render() {
    return (
      <div>
        <Header
          modalDisplayed={this.state.modalDisplayed}
          toggleModalDisplay={this.toggleModalDisplay}
          newGame={this.newGame}
        />
        <GuessSection
          feedback={this.state.feedback}
          updateGuessState={this.updateGuessState}
          gameOver={this.state.gameOver}
        />
        {/* Gets length of guesses array to find count */}
        <GuessCount count={this.state.guesses.length} />
        <GuessList guesses={this.state.guesses} />
      </div>
    );
  }
}

/*
-Game = stateful = stores state of the game
--Header = stateless
---Info modal = stateless
--Guess section = stateless
---Guess form = stateful = stores state of the form
---Guess count = stateless
---Guess list = stateless
*/
