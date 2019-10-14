import React, {Component} from 'react';
import Item from "./Item";
import Loader from "./Loader";
import Filter from "./Filter";
import Axios from 'axios';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            poke: []
        };
    }

    async componentDidMount() {
        try {
            const res = await Axios.get('https://pokeapi.co/api/v2/pokemon?limit=150');
            const data = res.data['results'];
            this.setState({
                isLoaded: true,
                poke: data
            })
        } catch (e) {
            this.setState({
                isLoaded: true,
                error: e
            })
        }
    }

    render() {
        const {error, isLoaded, poke} = this.state;
        if(error) {
            return <div>Error {error.message}</div>;
        } else if (!isLoaded) {
            return <Loader/>;
        } else {
            return (
                <div>
                    <Filter/>
                    {poke.map(function (pokemon, i) {
                        return (
                            <Item key={i} {...pokemon} url={pokemon.url}/>
                        )
                    })}
                </div>
            )
        }
    }
}

export default List