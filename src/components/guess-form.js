import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      guess: 1
    };
  }

  handleGuessChange(event) {
    this.setState({ guess: parseInt(event.target.value) });
  }

  render() {
    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          console.log('guess submitted');
          this.props.updateGuessState(this.state.guess);
        }}
      >
        <input
          type="number"
          min="1"
          max="100"
          name="userGuess"
          id="userGuess"
          className="text"
          maxLength="3"
          autoComplete="off"
          placeholder="Enter your Guess"
          required
          onChange={event => this.handleGuessChange(event)}
        />
        <input
          type="submit"
          id="guessButton"
          className="button"
          name="submit"
          value="Guess"
        />
      </form>
    );
  }
}
