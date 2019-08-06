import React from 'react';

import { Card, CardImg } from './GameCard';

export default function TeamCard(props) {
    // console.log('props: ', props);
    // console.log('CardImg: ', CardImg);

    return (
        <Card 
            onClick={props.flipCard}
            tabIndex="0"
            role="button"
            {...props}
        >
            <CardImg 
                src={props.team.logo} 
                alt={props.team.name} 
                isMatched={props.isMatched} 
                isSelected={props.isSelected} 
            />
        </Card>
    );
}