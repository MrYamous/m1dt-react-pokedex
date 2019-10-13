import React from 'react'
import Item from "./Item"

const List = ({pokemons}) => {
    return (
        <div>
            {pokemons.map(function (poke, i) {
                return (
                    <Item key={i} {...poke}/>
                )
            })}
        </div>
    )
};

export default List