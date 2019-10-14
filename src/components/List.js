import React from 'react';
import Item from "./Item";
import Loader from "./Loader";
import Filter from "./Filter";
import Axios from 'axios';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            poke: ""
        };
    }

    async componentDidMount() {
        try {
            const res = await Axios.get('https://pokeapi.co/api/v2/pokemon');
            const data = res.data;
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
                    {poke.map(function (item, i) {
                        return (
                            <Item key={i} {...item}/>
                        )
                    })}
                </div>
            )
        }
    }
}

export default List