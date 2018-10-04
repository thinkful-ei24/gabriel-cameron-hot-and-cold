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
  }

  toggleModalDisplay() {
    console.log('toggle modal called');

    const invertedModalState = !this.state.modalDisplayed;

    this.setState({ modalDisplayed: invertedModalState });
  }

  render() {
    return (
      <div>
        <Header
          modalDisplayed={this.state.modalDisplayed}
          toggleModalDisplay={this.toggleModalDisplay}
        />
        <GuessSection feedback={this.state.feedback} />
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
