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
      modalDisplayed: false
    };

    this.toggleModalDisplay = this.toggleModalDisplay.bind(this);
    this.updateGuessState = this.updateGuessState.bind(this);
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
    this.setState({ guesses: newGuessArray });
  }

  // Update user feedback message
  updateUserFeedbackMessageState() {}

  render() {
    return (
      <div>
        <Header
          modalDisplayed={this.state.modalDisplayed}
          toggleModalDisplay={this.toggleModalDisplay}
        />
        <GuessSection
          feedback={this.state.feedback}
          updateGuessState={this.updateGuessState}
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
