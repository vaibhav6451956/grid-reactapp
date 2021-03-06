import React, { Component } from 'react';
import Game from './game';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = { gameId: 1 };
  }

  createNewGame = () => {
    this.setState({ gameId: this.state.gameId + 1 });
  };

  render() {
    return (
      <div>
        <Game
          key={this.state.gameId}
          createNewGame={this.createNewGame}
          rows={5}
          columns={5}
          activeCellsCount={6}
        />
      </div>
    );
  }
}

export default Container;
