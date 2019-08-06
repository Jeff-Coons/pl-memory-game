import styled from 'styled-components';

export const CardImg = styled.img`
    flex-grow: 0;
    padding: 2rem;
    pointer-events: none;
    width: 60px;
`;

export const Card = styled.div.attrs(props => {
    // console.log('props from styled-component: ', props)
    return ({
    backgroundColor: props.isSelected || props.isMatched ? 'rgba(255, 255, 255, 0.4)' : '#fff',
    backgroundImg: props.isSelected || props.isMatched ? '' : "url('https://cdn.footystats.org/img/competitions/england-premier-league.png')",
    backfaceVisibility: props.isSelected ? 'hidden' : 'visible',
    opacity: props.isSelected || props.isMatched ? 1 : 0,
    transform: props.isSelected ? 'rotate(180deg)' : 'rotate(0)',
    transition: props.isSelected ? 'all 0.3s ease-in-out' : 'all 0.3s ease-in-out 0.2s',
    perspective: props.isSelected ? 1000 : 0,
})})`
    align-items: center;
    background-color: #fff;
    background-image: ${props => props.backgroundImg};
    background-position: center;
    background-repeat: no-repeat;
    background-size: 60px;
    backface-visibility: ${props => props.backfaceVisibility};
    border: solid 1px rgba(255, 255, 255, 0.4);
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    display: flex;
    flex-basis: 20%;
    flex-direction: column;
    justify-content: center;
    margin: 2rem 1rem;
    perspective: ${props => props.perspective};
    transition: ${props => props.transition};
    transform-style: preserve-3d;

    &:hover {
        border: solid 1px rgba(255, 255, 255, 0.8);
    }

    ${CardImg} {
        opacity: ${props => props.opacity}
        transition: all 0.2s ease-in-out;
    }
`;