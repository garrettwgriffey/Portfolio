import React from 'react';
import cards from '../project.json';
// import { map } from 'bluebird';
import Card from './Card';

export default function Project() {
    return (
        <div>
            {cards.map(obj => (
                <Card 
                title={obj.title}
                key={obj.id}
                image={obj.image}
                link={obj.link}
                />
            ))}
        </div>
    )
}




