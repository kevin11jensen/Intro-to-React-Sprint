// Write your Character component here
import React from 'react';
import Gender from './Gender';

export default function Character(props) {

    return (
        <div>
            <h1>{props.character.name}</h1>
            <Gender gender = {props.character.gender} />
        </div>
        
    )
}
