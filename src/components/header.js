import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default function Header(props) {
  function generateHeaderJSX() {
    return (
      <header>
        <TopNav toggleModalDisplay={props.toggleModalDisplay} newGame={props.newGame} />
        {generateModalJSX()}
        <h1>HOT or COLD</h1>
      </header>
    );
  }

  function generateModalJSX() {
    if (props.modalDisplayed) {
      return <InfoModal toggleModalDisplay={props.toggleModalDisplay} />;
    }
  }

  return generateHeaderJSX();
}
