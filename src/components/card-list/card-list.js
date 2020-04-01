import React from 'react';

import Card from "../card/card"
import "./card-list.styles.css"

const CardList = (props) => {

    return (
        <div className="card-list">
            {
                props.monsters.map(monster => (
                    monster.name.toLowerCase().includes(props.search.toLowerCase()) ?
                        <Card key={monster.id} monster={monster} /> : null
                ))
            }

        </div>
    );
}

export default CardList;