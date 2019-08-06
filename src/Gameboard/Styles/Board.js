import styled from 'styled-components';

const GameBoard = styled.div`
    background-color: #e5e5e5;
    min-height: calc(100vh - 4rem);
`;

const GameBoardContainer = styled.div`
    align-items: center;
    background-color: ${({ gameStarted }) => !gameStarted ? '#282c34' : '#e5e5e5'}
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
    padding: 4rem 2rem;
    transition: background-color 0.3s ease-in-out;
`;

const Title = styled.div`
    margin: auto;
    max-width: 300px;
    padding: 2rem;
    text-align: center;
`;

const TitleSmall = styled.h2`
    color: #777;
    font-size: 1rem;
    letter-spacing: 3px;
    margin: 0;
    text-transform: uppercase;
`;

const TitleLarge = styled.h1`
    color: #000;
    font-size: 2rem;
    margin: 0 0 0.25em;
`;

GameBoard.Container = GameBoardContainer;
Title.Small = TitleSmall;
Title.Large = TitleLarge;

export default { GameBoard, Title };