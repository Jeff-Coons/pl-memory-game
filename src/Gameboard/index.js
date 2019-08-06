import React, { Component } from 'react';

/** Data */
import data from '../Data/teams';

/** Styles */
import Board from './Styles/Board';

/** Components */
import GameStartEnd from './GameStartEnd';
import TeamCard from '../Components/Card';

// Fisher-Yates (aka Knuth) Shuffle
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
}

export default class Gameboard extends Component {
    constructor(props) {
        super(props);
        
        this.data = shuffle(data.reduce((preValue, current, index, array) => {
            return preValue.concat([current, current])
        },[]));

        console.log('this.data: ', this.data);
        
        this.state = {
            game: 'idle',
            selectedCards: [],
            matchedCards: [],
        };

        this.startGame = this.startGame.bind(this);
        this.endGame = this.endGame.bind(this);
        this.flipCard = this.flipCard.bind(this);
        this.handleMatchedCards = this.handleMatchedCards.bind(this);
    }

    startGame() {
        this.setState({ game: 'start' });
    }

    endGame() {
        this.setState({
            game: 'idle',
            selectedCards: [],
            matchedCards: [],
        });
    }

    flipCard(event) {
        const team = event.target.dataset.team;
        let selections = this.state.selectedCards;

        selections.push(team);

        this.setState({ selectedCards: selections }, () => {
            this.handleMatchedCards(selections);
        });
    }

    handleMatchedCards(selections) {
        let matchedCards = this.state.matchedCards;

        if ( selections.length === 2 ) {

            if (selections[0].slice(2) === selections[1].slice(2) && selections[0] !== selections[1]) {

                
                this.setState({
                    selectedCards: [],
                    matchedCards: [...matchedCards, ...selections],
                }, () => {

                    console.log('cool beans')
                    if ( this.state.matchedCards.length === this.data.length ) {
                        window.setTimeout(() => {
                            this.setState({ game: 'ended' });
                        }, 1000);
                    }
                });

            } else {

                window.setTimeout(() => {
                    this.setState({ selectedCards: [] });
                }, 1000)
            }

        } else if ( selections.length <= 1 ) {

            this.setState({ selectedCards: selections });
        }
    }

    checkForSelectedCard(index, team) {
        const slug = `${index < 10 ? `0${index}` : index}${team}`;
        
        return this.state.selectedCards.filter(card => card === slug).length >= 1;
    }

    checkForMatch(index, team) {
        const slug = `${index < 10 ? `0${index}` : index}${team}`;
        
        return this.state.matchedCards.filter(card => card === slug).length >= 1;
    }

    render() {
        console.log('this.state: ', this.state);
        return (
            <Board.GameBoard>
                <Board.Title>
                    <Board.Title.Large>Top 10 2019/2020<br /> Premier League</Board.Title.Large>
                    <Board.Title.Small>Memory Game</Board.Title.Small>
                </Board.Title>
                
                {(this.state.game === 'idle' || this.state.game === 'ended') ? (
                   
                   <GameStartEnd 
                        startGame={this.startGame} 
                        endGame={this.endGame}
                        gameState={this.state.game}
                    />

                ) : (

                    <Board.GameBoard.Container>
                        {this.data.map((team, index) => (
                            <TeamCard
                                key={`${index}-${team.slug}`}
                                isMatched={this.checkForMatch(index, team.slug)}
                                isSelected={this.checkForSelectedCard(index, team.slug)}
                                flipCard={this.flipCard}
                                team={team}
                                data-team={`${index < 10 ? `0${index}` : index}${team.slug}`}
                            />
                        ))}
                    </Board.GameBoard.Container>
                
                )}
            </Board.GameBoard>
        );
    }
}